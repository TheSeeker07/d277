function validateForm(form) {

    if (form.InputEmail1.value != form.InputEmail2.value)
    {
        alert('Emails don\'t match!');
        return false;
    } else {
        return true;
    }
}