import Footer, { TodayProgress } from './style';


export default function Footer(){
    return(
        <>
    <Footer>
      <Typography> Hábitos </Typography>
      <TodayProgress>
      <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45.5" cy="45.5" r="45.5" fill="#52B6FF"/>
        </svg>
        </TodayProgress>
      <Typography> Histórico </Typography>
    </Footer>
        </>
    );
}
