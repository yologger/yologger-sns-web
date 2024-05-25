import * as S from './PostNew.style';

export const PostBody = () => {
    return <>
        <S.Label>본문</S.Label>
        <S.BodyInput
            rows={6}
            placeholder="본문을 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            ref={null}
            onBlur={null}
        />
    </>
}