import { useForm } from "react-hook-form";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  opacity: 0.8;
`;

const SubTitle = styled.p`
  font-size: 16px;
  opacity: 0.7;
  padding: 30px;
  letter-spacing: 2px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  padding: 0px 10px;
  margin: 10px 0px;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 500px;
  height: 40px;
`;

const Span = styled.span`
  margin-left: 15px;
`;

const FirstForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleValid = (data) => {
    console.log(data);
    if (data.password !== data.passwordCheck) {
      setError(
        "password",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
  };
  return (
    <Box>
      <Title>구름 회원가입</Title>
      <SubTitle>하나의 아이디로 구름의 다양한 서비스를 이용해보세요.</SubTitle>
      <Form onSubmit={handleSubmit(handleValid)}>
        <Input
          {...register("name", {
            required: true,
            validate: {
              noChaeGyul: (value) =>
                value.includes("chaegyul") ? "no chaegyul allowed" : true,
            },
          })}
          placeholder="이름"
        />
        <span>{errors?.name?.message}</span>
        <Input
          {...register("email", {
            required: true,
          })}
          placeholder="이메일"
        />

        <Input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="비밀번호"
        />
        <span>{errors?.password?.message}</span>
        <Input
          {...register("passwordCheck", {
            required: true,
            minLength: {
              value: 5,
              message: "5글자 이상",
            },
          })}
          placeholder="비밀번호 확인"
        />
        <span>{errors?.passwordCheck?.message}</span>
        <Container>
          <CheckBox {...register("checkNews")} type="checkbox" />
          <p>구름 서비스에 대한 소식을 이메일로 받아봅니다.</p>
        </Container>
        <Container>
          <CheckBox
            {...register("checkService", { required: true })}
            type="checkbox"
          />
          <p>구름에서 제공하는 서비스 약관에 동의합니다. (필수)</p>
          <Span>약관 보기</Span>
        </Container>
        <Button>가입하기</Button>
      </Form>
    </Box>
  );
};

export default FirstForm;
