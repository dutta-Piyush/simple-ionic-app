import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonFooter,
  IonInput,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  useIonRouter,
  useIonLoading,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import logo from "../assets/logo.png";
import { useState } from "react";
import Introduction from "../components/Introduction";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [intro, setIntro] = useState(true);
  const [present, dismiss] = useIonLoading();

  const loginForm = async (e: any) => {
    e.preventDefault();
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/menu", "root");
    }, 2000);
  };

  const finishIntro = async () => {
    setIntro(false);
  };

  return (
    <>
      {intro ? (
        <Introduction onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"primary"}>
              <IonTitle className="ion-text-center">Login Page</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
                  <div className="ion-text-center">
                    <img src={logo} alt="myLogo" width={"50%"} />
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="8">
                  <form onSubmit={loginForm}>
                    <IonGrid fixed>
                      <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
                          <IonInput
                            type="email"
                            fill="outline"
                            label="Email"
                            labelPlacement="floating"
                            placeholder="Enter your Email"
                          ></IonInput>
                        </IonCol>
                      </IonRow>
                      <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
                          <IonInput
                            type="password"
                            fill="outline"
                            label="Password"
                            labelPlacement="floating"
                            placeholder="Enter your Password"
                          ></IonInput>
                        </IonCol>
                      </IonRow>
                      <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
                          <IonButton type="submit" expand="block">
                            Login
                            <IonIcon slot="end" icon={logInOutline}></IonIcon>
                          </IonButton>
                        </IonCol>
                      </IonRow>
                      <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="6">
                          <IonButton routerLink="/register" expand="block">
                            Register
                            <IonIcon
                              slot="end"
                              icon={personCircleOutline}
                            ></IonIcon>
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </form>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <IonToolbar>
              <IonTitle>Footer Section</IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonPage>
      )}
    </>
  );
};

export default Login;
