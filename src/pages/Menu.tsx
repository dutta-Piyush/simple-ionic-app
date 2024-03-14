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
  IonBackButton,
  IonSegmentButton,
  useIonRouter,
} from "@ionic/react";

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle className="ion-text-center">Menu Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>THis the the Menu section</IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer Section</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Menu;
