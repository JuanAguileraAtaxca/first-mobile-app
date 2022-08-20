import React from 'react'; 
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItemDivider, IonLabel} from '@ionic/react'; 
import {logoIonitron} from 'ionicons/icons';

const home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark" class="ion-padding-start">
                    <IonIcon slot="start" size="large" icon={logoIonitron}/>
                    <IonTitle>
                        <h1><strong> Home </strong></h1> 
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard href='/contenidos'>
                                <IonImg src="/assets/images/1.jpg" />
                                <IonCardHeader>
                                    <IonCardTitle> Estadistica </IonCardTitle>
                                    <IonCardSubtitle> Bienvenidos </IonCardSubtitle>
                                </IonCardHeader> 
                                <IonCardContent class="ion-text-justify">
                                    <IonLabel> Leer mas </IonLabel>
                                </IonCardContent>
                            </IonCard>
                            <IonCard href="/objetivos">
                                <IonImg src="/assets/images/2.jpg"/>
                                <IonCardHeader>
                                    <IonCardSubtitle> Objetivos </IonCardSubtitle>
                                </IonCardHeader> 
                                <IonCardContent class="ion-text-justify">
                                    
                                    <IonItemDivider class="ion-margin-bottom ion-padding-bottom">
                                        <p>
                                            Desarrollar una app que brinde al usuario
                                            una buena experiencia mediante su ejecución, asimismo,
                                            brindar ayuda al encontrar temas y recordar las formulas anotadas.
                                        </p>
                                    </IonItemDivider>
                                    <IonLabel> Leer mas </IonLabel>
                                </IonCardContent>
                            </IonCard>
                            <IonCard href="/alcances">
                                <IonImg src="/assets/images/3.jpg"/>
                                <IonCardHeader>
                                    <IonCardSubtitle> Alcances </IonCardSubtitle>
                                </IonCardHeader> 
                                <IonCardContent class="ion-text-justify">
                                    <IonItemDivider class="ion-margin-bottom ion-padding-bottom">
                                        <p>
                                            Destacar la importancia de la estadistica en la vida cotidiana
                                        </p>
                                    </IonItemDivider>
                                    <IonLabel> Leer mas </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    ); 
}; 

export default home; 