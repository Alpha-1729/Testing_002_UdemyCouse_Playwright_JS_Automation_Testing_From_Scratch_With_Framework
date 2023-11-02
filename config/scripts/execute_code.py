#!usr/bin/python3
# Script to run latest template.

import os
import json
from pathlib import Path

# Change dir to two dir up.
os.chdir(Path(__file__).parents[2])

# Read the config from the config.json file.
config_path = os.path.join('config', 'config.json')
with open(config_path, 'r') as config_file:
    config_data = json.load(config_file)

latest_section = config_data['section']['latest']
latest_template = config_data['template']['latest']
code_runner = config_data['code_runner']

script_path = os.path.join(os.getcwd(), latest_section, latest_template)
if os.path.exists(script_path):
    os.chdir(script_path)
    os.system('{} {}'.format(code_runner['program'], code_runner['file_name']))
