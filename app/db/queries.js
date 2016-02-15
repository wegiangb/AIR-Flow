module.exports = {
    new_experiment: "INSERT INTO experiment(name,description,subject_data_form) values(${name},${description},$(form_data))",
    list_experiments: "SELECT * FROM experiment",
    get_subjects: "SELECT id FROM subject WHERE experiment=${experiment}",
    new_subject: "INSERT INTO subject(experiment,device_setup,subject_data) values(${id},${device_setup},${subject_data})",
    
}
