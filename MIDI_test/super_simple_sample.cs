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
        static void Main(string[] args)
        {
            IntPtr hMidiOut;
            const int MIDI_MAPPER = -1;

            //open MIDI device 
            NativeMethods.midiOutOpen(out hMidiOut, MIDI_MAPPER, IntPtr.Zero, IntPtr.Zero, uint.MinValue);

            //select insturment (0x0000C0 means Piano)
            NativeMethods.midiOutShortMsg(hMidiOut, 0x0000C0);

            //play CDEFGAB
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3C90); //C
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3E90); //D
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4090); //E
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4190); //F
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4390); //G
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4590); //A
            Task.Delay(400).Wait();
            NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4790); //B
            Task.Delay(400).Wait();


            //NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3D90); //C#
            //Task.Delay(400).Wait();
            //NativeMethods.midiOutShortMsg(hMidiOut, 0x7F3F90); //D#
            //Task.Delay(400).Wait();
            //NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4290); //F#
            //Task.Delay(400).Wait();
            //NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4490); //G#
            //Task.Delay(400).Wait();
            //NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4690); //A#
            //Task.Delay(400).Wait();
            //NativeMethods.midiOutShortMsg(hMidiOut, 0x7F4890); //B#
            //Task.Delay(400).Wait();

            // release the MIDI device
            NativeMethods.midiOutReset(hMidiOut);
            NativeMethods.midiOutClose(hMidiOut);
            Console.ReadLine();

        }
    }
}
