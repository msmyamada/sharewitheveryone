using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

namespace ConsoleApp_MIDI_test
{
    public class NativeMethods
    {
        [DllImport("winmm.dll")]
        public static extern uint midiOutOpen(out IntPtr lphMidiOut, int uDeviceID, IntPtr dwCallback, IntPtr dwInstance, uint dwFlags);

        [DllImport("winmm.dll")]
        public static extern uint midiOutShortMsg(IntPtr hMidiOut, uint dwMsg);

        [DllImport("winmm.dll")]
        public static extern uint midiOutClose(IntPtr hMidiOut);

        [DllImport("winmm.dll")]
        public static extern uint midiOutReset(IntPtr hMidiOut);
    }
    internal class Program
    {
        static IntPtr hMidiOut;
        static int Tempo = 110; 

        static void Main(string[] args)
        {
            const int MIDI_MAPPER = -1;

            //open MIDI device 
            NativeMethods.midiOutOpen(out hMidiOut, MIDI_MAPPER, IntPtr.Zero, IntPtr.Zero, uint.MinValue);

            //select insturment (0x0000C0 is Piano, 0x0018C0 should be Guiltar)
            NativeMethods.midiOutShortMsg(hMidiOut, 0x0018C0);


            eight_beat1("C");
            eight_beat1("F");
            eight_beat1("G");

            Console.ReadLine();



            // release the MIDI device
            NativeMethods.midiOutReset(hMidiOut);
            NativeMethods.midiOutClose(hMidiOut);
            Console.ReadLine();

        }

        static void eight_beat1(string one)
        {
            play_a_code(one, 4);
            play_a_code(one, 8);
            play_a_code(one, 4);
            play_a_code(one, 8);
            play_a_code(one, 8);
            play_a_code(one, 8);
        }

        static void eight_beat2(string one, string two)
        {
            play_a_code(one, 4);
            play_a_code(one, 8);
            play_a_code(one, 4);
            play_a_code(two, 8);
            play_a_code(two, 8);
            play_a_code(two, 8);
        }

        static void special_beat(string one, string two, string tree, string four)
        {
            play_a_code(one, 2);
            play_a_code(two,4);
            play_a_code(two,8);
            play_a_code(two,4);
            play_a_code(tree,8);
            play_a_code(tree,4);
            play_a_code(four,4);
            play_a_code(four,8);
            play_a_code(four,8);

        }
        static void play_a_code(string code, int onpu)
        {
            if (code.Trim() == "C")
                play_C(onpu);
            else if (code.Trim() == "D")
                play_D(onpu);
            else if (code.Trim() == "E")
                play_E(onpu);
            else if (code.Trim() == "F")
                play_F(onpu);
            else if (code.Trim() == "G")
                play_G(onpu);
            else if (code.Trim() == "A")
                play_A(onpu);
            else if (code.Trim() == "B")
                play_B(onpu);
            else if (code == "Cm")
                play_Cm(onpu);
            else if (code == "Dm")
                play_Dm(onpu);
            else if (code == "Em")
                play_Em(onpu);
            else if (code == "Fm")
                play_Fm(onpu);
            else if (code == "Gm")
                play_Gm(onpu);
            else if (code == "Am")
                play_Am(onpu);
            else if (code == "Bm")
                play_Bm(onpu);

        }

        static void play_Cm(int onpu)    // C minor = C D# G
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3C90); //C
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3F90); //D#
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            Task.Delay(mydelay).Wait();

        }


        static void play_Dm(int onpu)    // D minor = D F A
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3E90); //D
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4190); //F
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4590); //A
            Task.Delay(mydelay).Wait();

        }


        static void play_Em(int onpu)    // E minor = E G B
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4090); //E
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4790); //B
            Task.Delay(mydelay).Wait();

        }


        static void play_Fm(int onpu)    // F minor = F G# C
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4190); //F
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4490); //G#
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4890); //C+
            Task.Delay(mydelay).Wait();

        }


        static void play_Gm(int onpu)    // G minor = G A# D
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4690); //A#
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4A90); //D+
            Task.Delay(mydelay).Wait();

        }


        static void play_Am(int onpu)    // A minor = A C E
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4590); //A
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4890); //C+
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4C90); //E+
            Task.Delay(mydelay).Wait();

        }


        static void play_Bm(int onpu)    // B minor = B D F#
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4790); //B
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4A90); //D+
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4E90); //F+#
            Task.Delay(mydelay).Wait();

        }



        static void play_C(int onpu)    // C major = C E G
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3C90); //C
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4090); //E
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            Task.Delay(mydelay).Wait();

        }

        static void play_D(int onpu)    // D major = D F# A
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3E90); //D
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4290); //F#
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4590); //A
            Task.Delay(mydelay).Wait();

        }

        static void play_E(int onpu)    // E major = E G# B
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4090); //E
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4490); //G#
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4790); //B
            Task.Delay(mydelay).Wait();

        }

        static void play_F(int onpu)    // F major = F A C
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4190); //F
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4590); //A
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4890); //C+
            Task.Delay(mydelay).Wait();

        }

        static void play_G(int onpu)    // G major = G B D
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4790); //B
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4A90); //D+
            Task.Delay(mydelay).Wait();

        }

        static void play_A(int onpu)    // A major = A C# E
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4590); //A
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4990); //C+#
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4C90); //E+
            Task.Delay(mydelay).Wait();

        }

        static void play_B(int onpu)    // B major = B D# F#
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 1:
                    mydelay = (int)(60.0 / (double)Tempo * 4000.0);
                    break;

                case 2:
                    mydelay = (int)(60.0 / (double)Tempo * 2000.0);
                    break;

                case 4:
                    mydelay = (int)(60.0 / (double)Tempo * 1000.0);
                    break;
                case 8:
                    mydelay = (int)(60.0 / (double)Tempo * 500.0);
                    break;
                case 16:
                    mydelay = (int)(60.0 / (double)Tempo * 250.0);
                    break;
                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4790); //B
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4B90); //D+#
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4E90); //F+#
            Task.Delay(mydelay).Wait();

        }





        static void splay_C(int onpu)
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 4:
                    mydelay = 400;
                    break;
                case 8:
                    mydelay = 200;
                    break;

                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3C90); //C
            Task.Delay(mydelay).Wait();

        }

        static void splay_E(int onpu)
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 4:
                    mydelay = 400;
                    break;
                case 8:
                    mydelay = 200;
                    break;

                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4090); //E
            Task.Delay(mydelay).Wait();

        }

        static void splay_G(int onpu)
        {
            int mydelay = 0;
            switch (onpu)
            {
                case 4:
                    mydelay = 400;
                    break;
                case 8:
                    mydelay = 200;
                    break;

                default:
                    mydelay = 800;
                    break;
            }
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            Task.Delay(mydelay).Wait();

        }
        static void play_all_sample()
        {
            //play all sounds
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3C90); //C
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3D90); //C#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3E90); //D
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3F90); //D#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4090); //E
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4190); //F
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4290); //F#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4490); //G#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4590); //A
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4690); //A#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4790); //B
            Task.Delay(400).Wait();

            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4890); //C+
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4990); //C+#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4A90); //D+
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4B90); //D+#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4C90); //E+
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4D90); //F+
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4E90); //F+#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4F90); //G+
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F5090); //G+#
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F5190); //A+
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F5290); //A+#
            Task.Delay(400).Wait();

        }
    }
}
