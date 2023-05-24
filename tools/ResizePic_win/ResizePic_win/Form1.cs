using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

namespace ResizePic_win
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        string global_str = "Done";
        public int target_size = 1024;
        string source_folder = @"********ここに元フォルダ（サイズの大きなPictureファイルが沢山入っている）を指定*************";
        string dest_folder = @"******ここにコピー先フォルダ（フォルダ構造はそのままに、大きいファイルだけリサイズする）を指定*******************";
        private void Form1_Load(object sender, EventArgs e)
        {

            textBox_source_folder.Text = source_folder;
            textBox_target_folder.Text = dest_folder;
        }

        private void button_start_Click(object sender, EventArgs e)
        {
            source_folder = textBox_source_folder.Text;
            dest_folder = textBox_target_folder.Text;
            if (Directory.Exists(source_folder) == false)
            {
                MessageBox.Show(source_folder + " doesn't exist");
                return;
            }
            if (Directory.Exists(dest_folder) == false)
            {
                MessageBox.Show(dest_folder + " doesn't exist");
                return;
            }

            DirectoryInfo di = new DirectoryInfo(source_folder);
            foreach (FileInfo fi in di.GetFiles("*.*", SearchOption.AllDirectories))
            {
                if (fi.Name.ToLower().EndsWith(".jpg") == false && fi.Name.ToLower().EndsWith(".jpeg") == false && fi.Name.ToLower().EndsWith(".png") == false)
                { continue; }

                textBox_monitor.Text += fi.FullName + "\r\n";
                this.Update();
                textBox_monitor.Update();
                textBox_monitor.SelectionStart = textBox_monitor.Text.Length;
                textBox_monitor.ScrollToCaret();
                resize_onefile(fi.FullName);

            }

            MessageBox.Show(global_str);
        }

        public void resize_onefile(string source_file)
        {
            string dest_fullfolder = source_file.Replace(source_folder, dest_folder);
            int temp_p = dest_fullfolder.LastIndexOf("\\");
            dest_fullfolder = dest_fullfolder.Substring(0, temp_p);
            int p = source_file.LastIndexOf("\\");
            string pure_filename = source_file.Substring(p);
            string dest_fullfilename = dest_fullfolder + pure_filename;

            if(File.Exists( dest_fullfilename)==true )
            {
                return;
            }

            if (Directory.Exists(dest_fullfolder) == false)
                Directory.CreateDirectory(dest_fullfolder);

            Bitmap mypic;
            try
            {
                mypic = new Bitmap(source_file);
            }
            catch
            {
                return;
            }

            int new_width = -1;
            int new_height = -1;

            if (mypic.Width < target_size && mypic.Height < target_size)    // small enough
            {
                FileInfo fi = new FileInfo(source_file);
                fi.CopyTo(dest_fullfilename);
                return;
            }

            if (mypic.Width >= mypic.Height)
            {
                new_width = target_size;
                float hiritsu = (float)new_width / (float)mypic.Width;
                new_height = (int)((float)(mypic.Height) * hiritsu);
            }
            else // mypic.Width < mypic.Height
            {
                new_height = target_size;
                float hiritsu = (float)new_height / (float)mypic.Height;
                new_width = (int)((float)(mypic.Width) * hiritsu);
            }

            Bitmap newone = new Bitmap(mypic, new_width, new_height);

            newone.Save(dest_fullfilename, ImageFormat.Jpeg);	//�����t�@�C�����ł͕ۑ��ł��Ȃ�

            mypic.Dispose();
            newone.Dispose();

        }

    }
}