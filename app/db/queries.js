module.exports = {
    new_experiment: "INSERT INTO experiment(name,description,subject_data_form) values(${name},${description},$(form_data))",
    list_experiments: "SELECT * FROM experiment",
    get_subjects: "SELECT id FROM subject WHERE experiment=${experiment}",
    get_channel_by_subject_id: "SELECT DISTINCT channel.fk_source FROM public.channel, public.raw_data WHERE raw_data.fk_channel = channel.pk_channel_id AND raw_data.fk_subject = ${subject};",


}
