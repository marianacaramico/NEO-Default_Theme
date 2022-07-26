$(document).ready(function(){

    const formCertification = $('#form-certification');
    const fieldsCertification = $('#fields-certification');
    const storageCertification = $('#storage-certification');

    formCertification.find('input, textarea').on('keyup', function() {
        fieldsCertification.find('[name="'+$(this).attr('name')+'"]').val($(this).val().replace(/&/g, ' e '));
    });

    formCertification.on('submit', function(e) {
        e.preventDefault();

        getValuesFormCertification($(this));
    });

    storageCertification.on('submit', function(e) {
        e.preventDefault();

        getValuesFormCertification($(this));
    });

    function getValuesFormCertification(form) {
        sessionStorage.setItem('Dados do formulário - Certificação', form.serialize());

        formCertification.find('input, textarea').val('');
        fieldsCertification.find('input, textarea').val('');

        fillTxtStorageCertification();

        alert('sessionStorage atualizada!');
    }

    function fillTxtStorageCertification() {
        if(!!sessionStorage.getItem('Dados do formulário - Certificação')) {
            let txtStorageCertification = sessionStorage.getItem('Dados do formulário - Certificação').replace(/%20/g, ' ').replace(/%40/g, '@').split('&');

            txtStorageCertification.forEach(element => {
                storageCertification.find('[name="'+element.match(/^\w*/)[0]+'"]').val(element.replace(/^\w*=/, ''));
            });
        }
    }

    fillTxtStorageCertification();

});