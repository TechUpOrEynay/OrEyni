﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace OrEyni.Bl
{
    public class ErrorManager
    {
        public static void OnError(Exception ex)
        {
            Debug.WriteLine(ex.ToString());
        }
    }
}
