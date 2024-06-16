import styled, { theme } from '~/styledComponents';

import Popup from "../Popup"
import TextButton from '~/components/atom/button/TextButton';

interface TestPopupPros {
    onClose: () => void
    showPopup: boolean
}

const TestPopup = ({ onClose, showPopup }: TestPopupPros) => {
    const children = <PopupContent>
        <div>This is TestPopup</div>
        <TextButton type='button' onClick={onClose}>Close</TextButton>
    </PopupContent>

    return <Popup children={children} showPopup={showPopup} />
}

const PopupContent = styled.div`
  width: 700px;
  background: ${({ theme }) => theme.color.white};
`

export default TestPopup