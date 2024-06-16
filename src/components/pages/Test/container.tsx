import { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Test from "./Test"
import * as umsApi from 'api/ums'

interface IContainerProps {
    success: (msg: string) => void;
}

const Container = ({ success }: IContainerProps) => {

    const [showAlert, setShowAlert] = useState(false)
    const openAlert = () => { setShowAlert(true) }
    const onAlertCancel = () => setShowAlert(false)
    const onAlertAction = () => {
        console.log('onAlertAction')
        setShowAlert(false)
    }

    const openToast = () => { success('This is toast') }

    const [showDialog, setShowDialog] = useState(false)
    const openDialog = () => { setShowDialog(true) }
    const closeDialog = () => { setShowDialog(false) }

    const [showPopup, setShowPopup] = useState(false)
    const openPopup = () => { setShowPopup(true) }
    const closePopup = () => { setShowPopup(false) }

    return <Test
        showAlert={showAlert}
        openAlert={openAlert}
        onAlertAction={onAlertAction}
        onAlertCancel={onAlertCancel}
        openToast={openToast}
        showDialog={showDialog}
        openDialog={openDialog}
        closeDialog={closeDialog}
        showPopup={showPopup}
        openPopup={openPopup}
        closePopup={closePopup}
    />
}

export default Container