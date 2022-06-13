using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _2018_mydir2
{
    class Program
    {
        static int cnt = 0;
        static int d_cnt = 0;
        static string filename = "";
        static bool dir_only = false;
        static bool searching = false;
        static string searchname = "";
        static bool show_size = false;

        static long total_size = 0;

        static void Main(string[] args)
        {
            //
            // TODO: Add code to start application here
            //
            string root_dir = null;
            if (args.Length == 0)
                root_dir = Directory.GetCurrentDirectory();
            else if (args.Length > 3 )
            {
                Console.WriteLine("wrong parameter!");
                show_usage();
            }
            else if (args.Length == 1 && args[0].ToLower() == "/?")
            {
                show_usage();
            }
            else if (args.Length == 1 && args[0].ToLower() == "/d")
            {
                root_dir = Directory.GetCurrentDirectory();
                dir_only = true;
            }
            else if (args.Length == 2 && args[0].ToLower() == "/d")
            {
                root_dir = args[1];
                dir_only = true;
            }
            else if (args.Length == 3 && args[0].ToLower() == "/f")
            {
                root_dir = args[2];
                searchname = args[1];
                searching = true;
            }
            else if (args.Length == 2 && args[0].ToLower() == "/f")
            {
                root_dir = Directory.GetCurrentDirectory();
                searchname = args[1];
                searching = true;
            }
            else if (args.Length == 1 && args[0].ToLower() == "/s")
            {
                root_dir = Directory.GetCurrentDirectory();
                show_size = true;
            }
            else if (args.Length == 2 && args[0].ToLower() == "/s")
            {
                root_dir = args[1];
                show_size = true;
            }
            else
            {
                root_dir = args[0];
                dir_only = false;
            }

            if (root_dir.StartsWith("\"") == true)
                root_dir = root_dir.Substring(1);
            if (root_dir.EndsWith("\"") == true)
                root_dir = root_dir.Substring(0, root_dir.Length - 1);

            //get the *.*
            int last_p = root_dir.LastIndexOf("\\");
            if (last_p == -1)
            {
                filename = root_dir;
                root_dir = Directory.GetCurrentDirectory();
            }
            else
            {
                filename = root_dir.Substring(last_p + 1);
                if (filename.IndexOf("*") != -1)    // was "."
                {
                    root_dir = root_dir.Substring(0, last_p);
                }
                else
                    filename = "*.*";

            }


            if (Directory.Exists(root_dir) == false)
            {
                Console.WriteLine("wrong dir name!");
                return;
            }
            mysearch(root_dir);
            // display the number of files
            Console.WriteLine("Total file number is : {0}", cnt);
            Console.WriteLine("Total directory number is : {0}", d_cnt);


            // //// to show the size
            string display_size = "";
            if (total_size >= 1024 && total_size < 1024 * 1024)   // 1K < <1M
                display_size = (total_size / 1024).ToString() + "K";
            else if (total_size >= 1024 * 1024 && total_size < 1024 * 1024 * 1024)   //1M < <1G
                display_size = (total_size / 1024 / 1024).ToString() + "M";
            else if (total_size >= 1024 * 1024 * 1024)   //1G < 
                display_size = (total_size / 1024 / 1024 / 1024).ToString() + "G";

            Console.Write("Total size is : {0,10:#,##0} Bytes",  total_size);
            if (display_size == "")
                Console.WriteLine();
            else
                Console.WriteLine(" (approx {0}B)", display_size);

        }

        static public void mysearch(string dir_name)
        {
            try
            {
                DirectoryInfo dirinfo_root = new DirectoryInfo(dir_name);
                DirectoryInfo[] dirs_root = dirinfo_root.GetDirectories();
                ////// File scanning section ////////////////////////////
                FileInfo[] files_root = dirinfo_root.GetFiles(filename);
                foreach (FileInfo file_root in files_root)
                {
                    if (searching == true)
                    {
                        if (file_root.FullName.ToLower().IndexOf(searchname) != -1)
                            Console.WriteLine(file_root.FullName);
                    }
                    //if(file_root.Name.ToLower().Trim() == 
                    else if (dir_only == false)
                        Console.Write(file_root.FullName);

                    if (show_size == true)
                        Console.WriteLine("\t({0,10:#,##0} Bytes)", file_root.Length);
                    else if (dir_only == false)
                        Console.WriteLine();

                    total_size += file_root.Length;
                    cnt++;
                }

                foreach (DirectoryInfo dir_root in dirs_root)
                {
                    if (searching == true)
                    {
                        if (dir_root.FullName.ToLower().IndexOf(searchname) != -1)
                            Console.WriteLine(dir_root.FullName);
                    }
                    else if (dir_only == true)
                    {
                        long foldersize_temp = get_FolderSize(dir_root);
                        Console.WriteLine("{0}\t({1,10:#,##0} Bytes)",  dir_root.FullName, foldersize_temp);	//to show all directory

                    }
                    //if (dir_root.FullName.ToLower().EndsWith("\\net") || dir_root.FullName.ToLower().EndsWith("\\man"))
                    //    return;
                    mysearch(dir_root.FullName);
                    d_cnt++;
                }

            }
            catch (Exception ee)
            {
                Console.WriteLine(ee.Message);
            }
        }

        static long get_FolderSize(DirectoryInfo d)
        {
            long size = 0;
            FileInfo[] fis = d.GetFiles();              // Get file sizes
            foreach (FileInfo fi in fis)
            {
                size += fi.Length;
            }
            DirectoryInfo[] dis = d.GetDirectories();            // Get subdirectory sizes
            foreach (DirectoryInfo di in dis)
            {
                size += get_FolderSize(di);
            }
            return size;
        }

        static void show_usage()
        {
            Console.WriteLine("mydir - handy tool to show filenames with the fullpath. ");
            Console.WriteLine("");
            Console.WriteLine("Usage 1.  mydir [targetDir]");
            Console.WriteLine("  shows all files under targetDir, including subfolders");
            Console.WriteLine("");
            Console.WriteLine("Usage 2.  mydir /d [targetDir]");
            Console.WriteLine(" - shows directories only with the size.");
            Console.WriteLine("");
            Console.WriteLine("Usage 3.  mydir /s [targetDir]");
            Console.WriteLine(" - shows file size.");
            Console.WriteLine("");
            Console.WriteLine("Usage 4.  mydir /f search_FileName [targetDir]");
            Console.WriteLine(" - to find a specified directory or file name.");
            Console.WriteLine("");
            Console.WriteLine("---- updated on 6/11/2022 target framework is .NET Framework 4.6.1");
            Console.WriteLine("");
            Environment.Exit(0);

        }

    }
}
