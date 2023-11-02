#!usr/bin/python3
# Script to run any template.

import os
import json
from pathlib import Path
from tkinter import filedialog
from tkinter import *

root = Tk()
root.withdraw()

# Change dir to two dir up.
os.chdir(Path(__file__).parents[2])

# Read the config from the config.json file.
config_path = os.path.join('config', 'config.json')
with open(config_path, 'r') as config_file:
    config_data = json.load(config_file)

code_runner = config_data['code_runner']

file_name = filedialog.askopenfilename(initialdir=os.getcwd(), title='Select a script')
os.system('{} "{}"'.format(code_runner['program'], file_name))
