import { ChangeEvent, FormEvent } from 'react';
import styled, { theme } from '~/styledComponents';
import * as S from './Test.style';
import Fade from '~/components/templates/Fade';
import Alert from '~/components/templates/Alert';
import Toast from '~/components/templates/Toast';
import Modal from '~/components/templates/Modal';
import Dialog from '~/components/molecules/Dialog';
import Popup from '~/components/molecules/Popup';
import { IDialog } from '~/types';
import TestPopup from '~/components/molecules/TestPopup';

interface IProps {
  showAlert: boolean
  openAlert: () => void
  onAlertAction: () => void
  onAlertCancel: () => void
  openToast: () => void
  showDialog: boolean
  openDialog: () => void
  closeDialog: () => void
  showPopup: boolean
  openPopup: () => void
  closePopup: () => void
}

const Test = ({ 
  showAlert, 
  openAlert, 
  onAlertAction, 
  onAlertCancel, 
  openToast,
  showDialog,
  openDialog, 
  closeDialog,
  showPopup,
  openPopup,
  closePopup
}: IProps) => {

  const dialogs: IDialog[] = [
    { label: 'label1', actionType: 'button', callback: null },
    { label: 'label2', actionType: 'link', callback: null },
    { label: 'label3', actionType: 'anchor', callback: null },
    { label: 'label4', actionType: 'imageButton', callback: null }
  ]

  return <Wrapper>
    <Form >
      <Groups>
        <ButtonGroup>
          <S.TestButton type="button" onClick={openAlert}>Alert</S.TestButton>
          <S.TestButton type="button" onClick={openToast}>Toast</S.TestButton>
          <S.TestButton type="button" onClick={openDialog}>Dialog</S.TestButton>
          <S.TestButton type="button" onClick={openPopup}>Popup</S.TestButton>
        </ButtonGroup>

        <Modal>
          <Fade in={showAlert} timeout={150}>
            <Alert description={<p>This is Alert</p>} isShownClose={true} buttonMsg='확인' onAction={onAlertAction} onCancel={onAlertCancel} />
          </Fade>
        </Modal>

        <Dialog show={showDialog} title={'this is title'} text={'this is text'} close={closeDialog} dialogs={dialogs} />

        <TestPopup showPopup={showPopup} onClose={closePopup}/>

      </Groups>
    </Form>
  </Wrapper>
}

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`

const Form = styled.form`
  width: ${({ theme }) => theme.bodyWidth};
`

const Groups = styled.ul`
  padding-top: 0.5rem;
`;

const Group = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

const ButtonGroup = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export default Test