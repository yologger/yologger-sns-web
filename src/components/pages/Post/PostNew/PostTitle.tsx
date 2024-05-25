import * as S from './PostNew.style';

export const PostTitle = () => {

    const error: boolean = false

    return <>
        <S.Label>제목</S.Label>
        <S.NameInput
            type="text"
            placeholder="제목을 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            onBlur={null}
            ref={null}
        />
    </>
}