import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonIcon,
  IonBackButton,
} from "@ionic/react";
import { checkmarkDoneOutline, logInOutline } from "ionicons/icons";

const Register: React.FC = () => {
  const registerForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inside the Register Function");
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color={'primary'}>
          <IonButton slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
        </IonButton>
            <IonTitle className="ion-text-center">Register Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form onSubmit={registerForm}>
            <IonGrid>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="4">
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
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="4">
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
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="4">
                  <IonButton type="submit" expand="block">
                    Register
                    <IonIcon slot="end" icon={checkmarkDoneOutline}></IonIcon>
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="10" sizeLg="8" sizeXl="4">
                  <IonButton routerLink="/" expand="block">
                    Already a User?
                    <IonIcon slot="end" icon={logInOutline}></IonIcon>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </form>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer Section</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default Register;
