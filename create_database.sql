/*
Experiments:
 - Stores Experiment Data
 - Contains Subjects
 - Light Source
 - Channel
*/

CREATE SEQUENCE expt_seq;
CREATE TABLE IF NOT EXISTS experiment(
  ID INT PRIMARY KEY DEFAULT nextval('expt_seq'),
  NAME VARCHAR(50) NOT NULL,
  DESCRIPTION TEXT
);

/*
Detector:
 - Primary Key
 - X and Y Coordinates
 - Referenced by Channel
*/
CREATE TABLE IF NOT EXISTS detector(
  ID VARCHAR(20) NOT NULL PRIMARY KEY,
  X_COORDINATE_MM REAL DEFAULT 0,
  Y_COORDINATE_MM REAL DEFAULT 0
);
/*
Light Source:
 - Primary Key
 - X and Y Coordinates
 - Referenced by Channel
*/
CREATE TABLE IF NOT EXISTS light_source(
  ID VARCHAR(20) PRIMARY KEY NOT NULL,
  X_COORDINATE_MM DECIMAL DEFAULT 0,
  Y_COORDINATE_MM DECIMAL DEFAULT 0
);
/*
Channel:
 - Referenced By Raw Data
 - Light Source
 - Detector
 - Power Form
 - Distance(mm)
 - Wavelength (nm)
*/
CREATE SEQUENCE channel_seq;
CREATE TABLE IF NOT EXISTS channel(
  ID INT PRIMARY KEY NOT NULL DEFAULT nextval('channel_seq'),
  LIGHT_SOURCE VARCHAR(20) NOT NULL REFERENCES light_source(id),
  DETECTOR VARCHAR(20) NOT NULL REFERENCES detector(id),
  POWER_FORM VARCHAR(20) NOT NULL,
  DISTANCE_MM DECIMAL NOT NULL,
  WAVELENGTH_NM INT NOT NULL
);
/*
Device Setup:
 - Referenced by Subject
 - Detector Channels 
 - External MUX Channels 
 - Auxiliary Channels 
 - Waveform (CCF) Frequency (Hz)
 - Waveforms Skipped 
 - Waveforms Averaged 
 - Cycles Averaged 
 - Acquisitions per Waveform 
 - Update Rate (Hz) 
 - Calibration State
*/
CREATE SEQUENCE dev_setup_seq;
CREATE TABLE IF NOT EXISTS device_setup(
  ID INT PRIMARY KEY NOT NULL DEFAULT nextval('dev_setup_seq'),
  DETECTOR_CHANNELS INT NOT NULL DEFAULT 4,
  EXTERNAL_MUX_CHANNELS INT NOT NULL DEFAULT 8,
  AUXILLARY_CHANNELS INT NOT NULL DEFAULT 0,
  WAVEFORMS_SKIPPED INT NOT NULL DEFAULT 3,
  WAVEFORMS_AVERAGED INT NOT NULL DEFAULT 50,
  WAVEFORM_FREQUENCY_HZ INT NOT NULL DEFAULT 5000,
  ACQUISITIONS_PER_WAVEFORM INT NOT NULL DEFAULT 8,
  UPDATE_RATE_HZ DECIMAL NOT NULL,
  CYCLES_AVERAGED INT NOT NULL DEFAULT 1,
  CALIBRATION_STATE BOOLEAN NOT NULL DEFAULT TRUE
);
/*
Subjects:
 - Stores Subject Census Data
 - Referenced by Raw Data 
 - References by Device Setup
*/
CREATE SEQUENCE sub_seq;
CREATE TABLE IF NOT EXISTS subject(
  ID INT PRIMARY KEY DEFAULT nextval('sub_seq'),
  EXPERIMENT INT NOT NULL REFERENCES experiment(id),
  DEVICE_SETUP VARCHAR(20) REFERENCES device_setup(id)
);
/*
Raw Data:
 - Subject
 - Channel
 - Value
 - Timestamp (Unix Epoch)
*/
CREATE SEQUENCE raw_data_seq;
CREATE TABLE IF NOT EXISTS raw_data(
  ID INT PRIMARY KEY DEFAULT nextval('raw_data_seq'),
  SUBJECT INT NOT NULL REFERENCES subject(id),
  CHANNEL INT NOT NULL REFERENCES channel(id),
  VALUE DECIMAL NOT NULL,
  TIME_SEC BIGINT
);
/*
Stimulus:
 - Name
 - Start Time
 - End Time 
 - Subject
*/
CREATE SEQUENCE stim_seq;
CREATE TABLE IF NOT EXISTS stimulus(
  ID INT PRIMARY KEY DEFAULT nextval('stim_seq'),
  NAME VARCHAR(20) NOT NULL,
  START_TIME DECIMAL NOT NULL,
  END_TIME DECIMAL NOT NULL,
  SUBJECT INT NOT NULL REFERENCES subject(id)
);