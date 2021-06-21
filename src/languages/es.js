/* eslint-disable max-len */
export default {
    common: {
        cancel: 'Cancelar',
        upload: 'Subir',
        yes: 'Si',
        no: 'No',
        attachment: 'Archivo Adjunto',
        to: 'A',
        optional: 'Opcional',
        new: 'NUEVO',
        search: 'Buscar',
        next: 'Siguiente',
        add: 'Agregar',
        resend: 'Reenviar',
        save: 'Guardar',
        password: 'Contraseña',
        profile: 'Perfil',
        payments: 'Pagos',
        preferences: 'Preferencias',
        view: 'Ver',
        not: 'No',
        signIn: 'Conectarse',
        continue: 'Continuar',
        phoneNumber: 'Número de teléfono',
        email: 'Email',
        and: 'y',
        details: 'Detalles',
        delete: 'Eliminar',
        contacts: 'Contactos',
        recents: 'Recientes',
        close: 'Cerrar',
        saveAndContinue: 'Guardar y Continuar',
        settings: 'Configuración',
        termsOfService: 'Términos de servicio',
        dob: 'Fecha de Nacimiento',
        ssn: 'Número de Seguridad Social',
        addressNoPO: 'Dirección (sin Apartado Postal)',
        companyAddressNoPO: 'Dirección de la Empresa (sin Apartado Postal)',
        city: 'Ciudad',
        state: 'Estado',
        zip: 'Código Postal',
        isRequiredField: 'es un campo obligatorio',
        whatThis: '¿Qué es esto?',
        invite: 'Invitar',
        iAcceptThe: 'Acepto los ',
        passwordCannotBeBlank: 'La contraseña no puede estar vacía',
    },
    attachmentPicker: {
        cameraPermissionRequired: 'Se necesita permiso para usar la cámara',
        expensifyDoesntHaveAccessToCamera: 'Expensify.cash no tiene acceso a tu cámara, por favor activa el permiso y vuelve a intentarlo.',
        attachmentError: 'Error al adjuntar archivo',
        errorWhileSelectingAttachment: 'Ha ocurrido un error al seleccionar un adjunto, por favor inténtalo de nuevo',
        errorWhileSelectingCorruptedImage: 'Ha ocurrido un error al seleccionar un adjunto corrupto, por favor intentalo con otro archivo',
        takePhoto: 'Hacer una Foto',
        chooseFromGallery: 'Elegir de la galería',
        chooseDocument: 'Elegir Documento',
    },
    textInputFocusable: {
        noExtentionFoundForMimeType: 'No se encontró una extension para este tipo de contenido',
        problemGettingImageYouPasted: 'Ha ocurrido un problema al obtener la imagen que has pegado',
    },
    baseUpdateAppModal: {
        updateApp: 'Actualizar App',
        updatePrompt: 'Existe una nueva versión de Expensify.cash.\nActualiza ahora or reinicia la aplicación más tarde para recibir la última versión.',
    },
    iOUConfirmationList: {
        whoPaid: '¿QUIÉN PAGO?',
        whoWasThere: '¿QUIÉN ASISTIÓ?',
        whatsItFor: '¿PARA QUÉ ES?',
    },
    iOUCurrencySelection: {
        selectCurrency: 'Selecciona una moneda',
        allCurrencies: 'TODAS LAS MONEDAS',
    },
    optionsSelector: {
        nameEmailOrPhoneNumber: 'Nombre, email o número de teléfono',
    },
    videoChatButtonAndMenu: {
        zoom: 'Zoom',
        googleMeet: 'Google Meet',
    },
    hello: 'Hola',
    phoneCountryCode: '34',
    welcomeText: {
        phrase1: 'Con Expensify.cash, chat y pagos son lo mismo.',
        phrase2: 'El dinero habla. Y ahora que chat y pagos están en un mismo lugar, es también fácil.',
        phrase3: 'Tus pagos llegan tan rápido como tus mensajes.',
    },
    reportActionCompose: {
        uploadAttachment: 'Subir Archivo Adjunto',
        addAttachment: 'Agregar Archivo Adjunto',
        writeSomething: 'Escribe algo...',
        youAppearToBeOffline: 'Parece que estás desconectado.',
    },
    reportActionContextMenu: {
        copyToClipboard: 'Copiar al Portapapeles',
        copied: '¡Copiado!',
        copyLink: 'Copiar Enlace',
        markAsUnread: 'Marcar como no leído',
        editComment: 'Editar Commentario',
        deleteComment: 'Eliminar Comentario',
        deleteConfirmation: '¿Estás seguro de que quieres eliminar este comentario?',
    },
    reportActionsView: {
        beFirstPersonToComment: 'Sé el primero en comentar',
    },
    reportTypingIndicator: {
        isTyping: 'está escribiendo...',
        areTyping: 'están escribiendo...',
        multipleUsers: 'Varios usuarios',
    },
    sidebarScreen: {
        newChat: 'Nuevo Chat',
        newGroup: 'Nuevo Grupo',
        headerChat: 'Chats',
        buttonSearch: 'Buscar',
        buttonMySettings: 'Mi configuración',
        fabNewChat: 'Nuevo Chat',
    },
    iou: {
        amount: 'Importe',
        participants: 'Participantes',
        confirm: 'Confirmar',
        splitBill: 'Dividir Factura',
        requestMoney: 'Pedir Dinero',
        pay: 'Pagar',
        viewDetails: 'Ver detalles',
        settleExpensify: 'Pagar con Expensify',
        settleElsewhere: 'Voy a pagar de otra forma',
        decline: 'Rechazar',
        settlePaypalMe: 'Pagar con PayPal.me',
        settleVenmo: 'Pagar con Venmo',
        request: ({amount}) => `Solicitar ${amount}`,
        owes: ({manager, owner}) => `${manager} debe a ${owner}`,
        paid: ({owner, manager}) => `${manager} pagó a ${owner}`,
        split: ({amount}) => `Dividir ${amount}`,
        choosePaymentMethod: 'Elige el método de pago:',
    },
    loginField: {
        addYourPhoneToSettleViaVenmo: 'Agrega tu número de teléfono para pagar usando Venmo.',
        numberHasNotBeenValidated: 'El número no está validado todavía. Haz click en el botón para reenviar el enlace de confirmación via SMS.',
        useYourPhoneToSettleViaVenmo: 'Usa tu número de teléfono para pagar usando Venmo.',
        emailHasNotBeenValidated: 'El email no está validado todavía. Haz click en el botón para reenviar el enlace de confirmación via email.',
    },
    profilePage: {
        uploadPhoto: 'Subir Foto',
        removePhoto: 'Eliminar Foto',
        profile: 'Perfil',
        editPhoto: 'Editar Foto',
        tellUsAboutYourself: '¡Cuéntanos algo sobre tí, nos encantaría conocerte!',
        firstName: 'Nombre',
        john: 'Juan',
        lastName: 'Apellidos',
        doe: 'Nadie',
        preferredPronouns: 'Pronombres preferidos',
        selectYourPronouns: 'Selecciona tus pronombres',
        selfSelectYourPronoun: 'Auto-selecciona tu pronombre',
        emailAddress: 'Dirección de Email',
        setMyTimezoneAutomatically: 'Configura mi zona horaria automáticamente',
        timezone: 'Zona horaria',
        growlMessageOnSave: 'Tu perfil se ha guardado correctamente',
    },
    addSecondaryLoginPage: {
        addPhoneNumber: 'Agregar Número de Teléfono',
        addEmailAddress: 'Agregar dirección de Email',
        enterPreferredPhoneNumberToSendValidationLink: 'Escribe tu número de teléfono y contraseña para recibir el enlace de validación.',
        enterPreferredEmailToSendValidationLink: 'Escribe tu email y contraseña para recibir el enlace de validación.',
        sendValidation: 'Enviar validación',
    },
    initialSettingsPage: {
        about: 'Acerca de',
        aboutPage: {
            description: 'Expensify.cash está desarrollado por una comunidad de desarrolladores open source de todo el mundo. Ayúdanos a construir la próxima generación de Expensify.',
            appDownloadLinks: 'Enlaces para descargar la App',
            viewTheCode: 'Ver codigo',
            viewOpenJobs: 'Ver trabajos disponibles',
            reportABug: 'Reporta un error',
        },
        appDownloadLinks: {
            android: {
                label: 'Android',
            },
            ios: {
                label: 'iOS',
            },
            desktop: {
                label: 'Desktop',
            },
        },
        signOut: 'Desconectar',
        versionLetter: 'v',
        changePassword: 'Cambiar Contraseña',
        readTheTermsAndPrivacyPolicy: {
            phrase1: 'Leer los',
            phrase2: 'términos de servicio',
            phrase3: 'y',
            phrase4: 'política de privacidad',
        },
    },
    passwordPage: {
        changePassword: 'Cambiar Contraseña',
        changingYourPasswordPrompt: 'El cambio de contraseña va a afectar tanto a la cuenta de Expensify.com\ncomo la de Expensify.cash.',
        currentPassword: 'Contraseña Actual',
        newPassword: 'Nueva contraseña',
        newPasswordPrompt: 'La nueva contraseña tiene que ser diferente de la antigua, tener al menos 8 letras,\n1 letra mayúscula, 1 letra minúscula y 1 número.',
        confirmNewPassword: 'Confirma la Nueva Contraseña',
    },
    paymentsPage: {
        enterYourUsernameToGetPaidViaPayPal: 'Escribe tu nombre de usuario para que otros puedan pagarte a través de PayPal.',
        payPalMe: 'PayPal.me/',
        yourPayPalUsername: 'Tu usuario de PayPal',
        addPayPalAccount: 'Agregar Cuenta de Paypal',
    },
    preferencesPage: {
        mostRecent: 'Más Recientes',
        mostRecentModeDescription: 'Esta opción muestra por defecto todos los chats, ordenados a partir del más reciente, con los chats destacados arriba de todo',
        focus: '#concentración',
        focusModeDescription: '#concentración – Muestra sólo los chats no leídos y destacados ordenados alfabéticamente.',
        notifications: 'Notificaciones',
        receiveRelevantFeatureUpdatesAndExpensifyNews: 'Recibir noticias sobre Expensify y actualizaciones del producto',
        priorityMode: 'Modo Prioridad',
        language: 'Idioma',
        languages: {
            english: 'Inglés',
            spanish: 'Español',
        },
    },
    signInPage: {
        expensifyDotCash: 'Expensify.cash',
        expensifyIsOpenSource: 'Expensify.cash es open source',
        theCode: 'el código',
        openJobs: 'trabajos disponibles',
    },
    termsOfUse: {
        phrase1: 'Al usar Expensify.cash, estás aceptando los',
        phrase2: 'términos de servicio',
        phrase3: 'y',
        phrase4: 'política de privacidad',
        phrase5: 'El envío de dinero es brindado por Expensify Payments LLC (NMLS ID:2017010) de conformidad con sus',
        phrase6: 'licencias',
    },
    passwordForm: {
        pleaseFillOutAllFields: 'Por favor completa todos los campos',
        forgot: '¿Te has olvidado?',
        twoFactorCode: 'Autenticación de 2 factores',
        requiredWhen2FAEnabled: 'Obligatorio cuando A2F está habilitado',
    },
    loginForm: {
        pleaseEnterEmailOrPhoneNumber: 'Por favor escribe un email o número de teléfono',
        phoneOrEmail: 'Número de Teléfono o Email',
        enterYourPhoneOrEmail: 'Escribe tu número de teléfono o email:',
    },
    resendValidationForm: {
        linkHasBeenResent: 'El enlace se ha reenviado',
        weSentYouMagicSignInLink: '¡Te hemos enviado un enlace - simplemente haz click en él para conectarte!',
        resendLink: 'Reenviar Enlace',
    },
    detailsPage: {
        localTime: 'Hora local',
    },
    newGroupPage: {
        createGroup: 'Crear Grupo',
    },
    notFound: {
        chatYouLookingForCannotBeFound: 'No se pudo encontrar el chat que estabas buscando.',
        getMeOutOfHere: 'Sácame de aquí',
    },
    setPasswordPage: {
        enterPassword: 'Escribe una contraseña',
        setPassword: 'Configura tu Contraseña',
    },
    bankAccount: {
        accountNumber: 'Número de cuenta',
        routingNumber: 'Número de ruta',
        addBankAccount: 'Agregar cuenta bancaria',
        chooseAnAccount: 'Elige una cuenta',
        logIntoYourBank: 'Inicie sesión en su banco',
        connectManually: 'Conectar manualmente',
        yourDataIsSecure: 'Tus datos estan seguros',
        toGetStarted: 'Para comenzar con la tarjeta Expensify, primero debe agregar una cuenta bancaria.',
        plaidBodyCopy: 'Ofrezca a sus empleados una forma más sencilla de pagar - y recuperar - los gastos de la empresa.',
        checkHelpLine: 'Su número de ruta y número de cuenta se pueden encontrar en un cheque para la cuenta.',
        hasPhoneLoginError: 'Para agregar una cuenta bancaria verificada, asegúrese de que su inicio de sesión principal sea un correo electrónico válido y vuelva a intentarlo. Puede agregar su número de teléfono como inicio de sesión secundario.',
        hasBeenThrottledError: ({fromNow}) => `Por razones de seguridad, nos tomamos un descanso de la configuración de la cuenta bancaria para que pueda verificar la información de su empresa. Inténtalo de nuevo ${fromNow}. ¡Lo siento!`,
    },
    addPersonalBankAccountPage: {
        enterPassword: 'Escribe una contraseña',
        alreadyAdded: 'Esta cuenta ya ha sido agregada.',
    },
    attachmentView: {
        unknownFilename: 'Archivo desconocido',
    },
    pronouns: {
        heHimHis: 'Él',
        sheHerHers: 'Ella',
        theyThemTheirs: 'Ellos',
        zeHirHirs: 'Ze/hir',
        selfSelect: 'Personalízalo',
        callMeByMyName: 'Llámame por mi nombre',
    },
    cameraPermissionsNotGranted: 'No has habilitado los permisos para acceder a la cámara',
    messages: {
        noPhoneNumber: 'Por favor escribe un número de teléfono que incluya el código de país e.g +447814266907',
        maxParticipantsReached: 'Has llegado al número máximo de participantes para un grupo.',
    },
    beneficialOwnersStep: {
        beneficialOwners: 'Beneficial Owners',
        additionalInformation: 'Additional Information',
        checkAllThatApply: '(check all that apply, otherwise leave blank)',
        iOwnMoreThan25Percent: 'I own more than 25% of ',
        someoneOwnsMoreThan25Percent: 'Somebody else owns more than 25% of ',
        additionalOwner: 'Additional Beneficial Owner',
        removeOwner: 'Remove this beneficial owner',
        addAnotherIndividual: 'Add another individual who owns more than 25% of ',
        agreement: 'Agreement:',
        termsAndConditions: 'terms and conditions',
        certifyTrueAndAccurate: 'I certify that the information provided is true and accurate',
    },
    session: {
        offlineMessage: 'Parece que no estás conectado a internet. Comprueba tu conexión e inténtalo de nuevo.',
    },
    workspace: {
        new: {
            newWorkspace: 'Nuevo Workspace',
            getTheExpensifyCardAndMore: 'Consigue la Expensify Card y más',
            welcome: 'Bienvenido/a',
            chooseAName: 'Elige un nombre',
            helpText: '¡Dale un nombre a tu Workspace antes de activar tus Expensify Cards!',
            getStarted: '¡Empezar!',
            genericFailureMessage: 'Se ha producido un error al intentar crear el Workspace. Por favor, inténtalo de nuevo.',
        },
        invite: {
            invitePeople: 'Invitar a la gente',
            invitePeoplePrompt: 'Invita a un colega a tu espacio de trabajo.',
            personalMessagePrompt: 'Agregar un mensaje personal (Opcional)',
            enterEmailOrPhone: 'Email o teléfono',
            pleaseEnterValidLogin: 'Asegúrese de que el correo electrónico o el número de teléfono sean válidos (e.g. +15005550006).',
            genericFailureMessage: 'Se produjo un error al invitar al usuario al espacio de trabajo. Vuelva a intentarlo..',
            welcomeNote: ({workspaceName}) => `¡Has sido invitado a la ${workspaceName} Espacio de trabajo! Descargue la aplicación móvil Expensify para comenzar a rastrear sus gastos.`,
        },
    },
    companyStep: {
        headerTitle: 'Información de la Empresa',
        subtitle: 'Dé más información sobre su empresa.',
        legalBusinessName: 'Nombre Comercial Legal',
        companyWebsite: 'Company Website',
        taxIDNumber: 'Tax ID Number',
        companyType: 'Página Web de la Empresa',
        incorporationDate: 'Fecha de Incorporación',
        industryClassificationCode: 'Código de Clasificación Industrial',
        confirmCompanyIsNot: 'Confirmo que esta empresa no está en el',
        listOfRestrictedBusinesses: 'lista de negocios restringidos',
    },
    requestCallPage: {
        requestACall: 'Llámame por teléfono',
        description: '¿Necesitas ayuda configurando tu cuenta? Nuestro equipo de guías puede ayudarte.',
        instructions: 'Escribe tu nombre y número de teléfono y te llamaremos.',
        availabilityText: '*Nuestros guías están disponibles de domingo desde las 17.00 CT a viernes hasta las 17.00 CT. Si solicitas una llamada fuera de este horario, te llamaremos de lunes a viernes de 9.00 a 17.00 en tu hora local. El orden de llamada corresponde con el orden de solicitud.',
        callMe: 'Llámame',
        growlMessageOnSave: 'Llamada perdida.',
        growlMessageInvalidPhone: 'El teléfono no es valido. Intenta nuevamente agregando el código de país. Eg: +15005550006',
        growlMessageEmptyName: 'Por favor ingresa tu nombre completo',
    },
};
