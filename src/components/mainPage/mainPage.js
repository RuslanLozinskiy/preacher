import { DaysBlock } from "./daysBlock/daysBlock";
import { Header } from "./header/header";
import { InfoBlock } from "./infoBlock/infoBlock";
import style from "./mainPage.module.css";
import { TempBlock } from "./tempBlock/tempBlock";
export const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <Header />
      <InfoBlock />
      <TempBlock />
      <DaysBlock />
    </div>
  );
};
