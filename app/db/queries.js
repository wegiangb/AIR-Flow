module.exports = {
    new_experiment: "INSERT INTO experiment(name,description,subject_data_form) values(${name},${description},$(form_data))",
    list_experiments: "SELECT * FROM experiment",
    get_subjects: "SELECT id FROM subject WHERE experiment=${experiment}",
    get_subjects_temp: "SELECT * FROM subject",
    get_channels: "SELECT * from channel where power_form='DC'",
    get_raw_data_by_channel: "SELECT time_second, value from raw_data where fk_subject=${subject} AND fk_channel=${channel} AND pk_data_id % 5 = 0",
    get_stim: "SELECT name,start_time_second, end_time_second from stim where fk_subject=${subject}"
}
