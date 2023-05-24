namespace ResizePic_win
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            button_start = new Button();
            label1 = new Label();
            label2 = new Label();
            textBox_source_folder = new TextBox();
            textBox_target_folder = new TextBox();
            textBox_monitor = new TextBox();
            SuspendLayout();
            // 
            // button_start
            // 
            button_start.Location = new Point(380, 77);
            button_start.Name = "button_start";
            button_start.Size = new Size(289, 24);
            button_start.TabIndex = 0;
            button_start.Text = "&Start";
            button_start.UseVisualStyleBackColor = true;
            button_start.Click += button_start_Click;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(12, 19);
            label1.Name = "label1";
            label1.Size = new Size(79, 15);
            label1.TabIndex = 1;
            label1.Text = "Source_folder";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(12, 51);
            label2.Name = "label2";
            label2.Size = new Size(75, 15);
            label2.TabIndex = 2;
            label2.Text = "Target_folder";
            // 
            // textBox_source_folder
            // 
            textBox_source_folder.Location = new Point(97, 16);
            textBox_source_folder.Name = "textBox_source_folder";
            textBox_source_folder.Size = new Size(572, 23);
            textBox_source_folder.TabIndex = 3;
            // 
            // textBox_target_folder
            // 
            textBox_target_folder.Location = new Point(97, 48);
            textBox_target_folder.Name = "textBox_target_folder";
            textBox_target_folder.Size = new Size(572, 23);
            textBox_target_folder.TabIndex = 4;
            // 
            // textBox_monitor
            // 
            textBox_monitor.Location = new Point(12, 115);
            textBox_monitor.Multiline = true;
            textBox_monitor.Name = "textBox_monitor";
            textBox_monitor.ScrollBars = ScrollBars.Vertical;
            textBox_monitor.Size = new Size(652, 316);
            textBox_monitor.TabIndex = 5;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(702, 443);
            Controls.Add(textBox_monitor);
            Controls.Add(textBox_target_folder);
            Controls.Add(textBox_source_folder);
            Controls.Add(label2);
            Controls.Add(label1);
            Controls.Add(button_start);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button button_start;
        private Label label1;
        private Label label2;
        private TextBox textBox_source_folder;
        private TextBox textBox_target_folder;
        private TextBox textBox_monitor;
    }
}