import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="logoOne" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Acess to Raya and the Last Dragon for
                        an additional fee with a Disney+ subscription. As of 03/26/21,
                        the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="LogoTwo" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};


const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
width: 100%;
positiion: relative;
margin-bottom: 10vw;
min-height: 100vh;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 80px 40px;
height: 100%;
`

const BgImage = styled.div`
background-image: url("/images/login-background.jpg");
height: 100%;
z-index: -1;
position: absolute;
background-position: top;
background-size: cover;
top: 0;
right: 0;
left: 0;
`;

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
jusfity-content: center;
margin-top: 0;
aligh-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const CTALogoTwo = styled.img`
max-width: 600px;
maring-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: f9f9f9;
background-color: #0063e5;
maring-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`;

const Description = styled.p`
font-size: 11px;
maring: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;
export default Login;