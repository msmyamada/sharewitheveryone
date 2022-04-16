using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.Office.Interop.Excel;

namespace WindowsFormsApp1_test_Excel
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private void button1_Click(object sender, EventArgs e)
        {
            Microsoft.Office.Interop.Excel.Application oXls; // Excel Object
            Workbook oWBook; // workbook Object
            Worksheet oSheet;
            Range oRng;

            oXls = new Microsoft.Office.Interop.Excel.Application();
            oXls.Visible = true; // Show Excel screen

            // open Excel file
            oWBook = (Workbook)(oXls.Workbooks.Add(System.Type.Missing));
            oSheet = (Worksheet)oWBook.ActiveSheet;
            oSheet.Name = "main";

            oSheet.Cells[1, 1] = "name";
            oSheet.Cells[1, 2] = "score";
            oSheet.Cells[2, 1] = "kuma";
            oSheet.Cells[2, 2] = "10";
            oSheet.Cells[3, 1] = "kuma";
            oSheet.Cells[3, 2] = "20";
            oSheet.Cells[4, 1] = "kuma";
            oSheet.Cells[4, 2] = "30";
            oSheet.Cells[5, 1] = "yama";
            oSheet.Cells[5, 2] = "40";
            oSheet.Cells[6, 1] = "yama";
            oSheet.Cells[6, 2] = "12";
            MakePivot(oWBook, "main");
        }

        public Boolean MakePivot(Workbook oWBook, string strSheetName)
        {
            Boolean result = true;

            try
            {
                // prep
                var pch = oWBook.PivotCaches();
                Worksheet ObjSheet = (Worksheet)oWBook.Sheets[strSheetName];
                Range pivotData = ObjSheet.UsedRange;
                PivotCache pc = pch.Create(XlPivotTableSourceType.xlDatabase, pivotData);

                // create a pivot next to the strSheetName
                Worksheet pivotWorkSheet = oWBook.Sheets.Add(After: oWBook.Sheets[strSheetName]);
                // change the name
                pivotWorkSheet.Name = "myPivot";
                // create the pivot table at A1
                PivotTable pvt = pc.CreatePivotTable(pivotWorkSheet.Range["A1"]);
                // Row label 
                pvt.PivotFields("name").Orientation = XlPivotFieldOrientation.xlRowField;
                // add the data field
                pvt.AddDataField(pvt.PivotFields("score"), "sum Score", XlConsolidationFunction.xlSum);
                //pvt.AddDataField(pvt.PivotFields("(another field)"), "another field", XlConsolidationFunction.xlSum);
            }
            catch (Exception ex)
            {
                result = false;
            }

            return result;
        }
    }
}
