import React from "react"
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import '../components/Introduction.css';
import pic1 from '../assets/swipper/pic1.png';
import pic2 from '../assets/swipper/pic2.png';
import pic3 from '../assets/swipper/pic3.png';
import pic4 from '../assets/swipper/pic4.png';
import { IonButton, IonText } from "@ionic/react";

interface ContainerProps {
    onFinish: () => void; 
}

const SwiperButtonNext = ({ children }: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>
}

const Introduction: React.FC<ContainerProps> = ({onFinish}) => {
    return (
        <Swiper>
            <SwiperSlide>
                <img src={pic1} alt="pic_1" />
                <IonText className="ion-text-center">
                    <h2>Want to travel the world!</h2>
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
                <img src={pic2} alt="pic_2" />
                <IonText className="ion-text-center">
                    <h2 >Pack your bag and get ready!</h2>
                    <SwiperButtonNext>Next</SwiperButtonNext>
                </IonText>
            </SwiperSlide>
            <SwiperSlide>
                <img src={pic3} alt="pic_3" />
                <IonText className="ion-text-center">
                    <h2>Lots of adventures are waiting for you</h2>
                    <SwiperButtonNext>Next</SwiperButtonNext>
                </IonText>
            </SwiperSlide>
            <SwiperSlide>
                <img src={pic4} alt="pic_4" />
                <IonText className="ion-text-center">
                    <h2>One more step towards fulfilling your dreams!</h2>
                    <IonButton onClick={() => onFinish()}>Join US</IonButton>
                </IonText>
            </SwiperSlide>
        </Swiper>
    );
}

export default Introduction;