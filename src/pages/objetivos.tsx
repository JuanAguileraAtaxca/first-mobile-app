import React from 'react';
import {IonPage, IonContent, IonHeader, IonIcon, IonToolbar, IonItem, IonItemDivider, IonCard, IonCardContent, IonCardTitle, IonCardHeader} from '@ionic/react';
import {logoIonitron, extensionPuzzle, peopleCircle} from 'ionicons/icons';

const objetivos: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar class="ion-padding-start" color="dark">
                    <IonIcon size="large" slot="start" icon={logoIonitron}/>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding ion-text-justify">
                <IonCard color="dark" class="ion-margin-bottom">
                    <IonCardHeader>
                        <IonToolbar class="ion-text-center">
                            <IonCardTitle><h2> Objetivo del proyecto </h2></IonCardTitle>
                            <IonIcon size="large" icon={extensionPuzzle}/>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem class="ion-text-justify">
                            <ul>
                                <li>Implementar una aplicación en la plataforma de android/ IOs, como estrategia y apoyo en el aprendizaje y enseñanza de estadistica. </li>
                                <li>Lograr funcionalidades estables y ajustadas para que la interacción permita que los usuarios logren sus objetivos de aprendizaje. </li>
                            </ul>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
                <IonCard color="dark">
                    <IonCardHeader>
                        <IonToolbar class="ion-text-center">
                            <IonCardTitle> <h2> Objetivo para el usuario </h2></IonCardTitle>
                            <IonIcon size="large" icon={peopleCircle}/>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem class="ion-text-justify">
                            <ul>
                                <li> Desarrollar una interfaz de fácil apropiación, uso y diseño de acuerdo al proposito pedagogico. </li>
                                <li>
                                    Lograr la coherencia entre contenidos e interfaz para motivar a los usuarios al uso de la aplicación promoviendo 
                                    el aprendizaje de las tematicas desarrolladas. 
                                </li>
                            </ul>
                        </IonItem>
                        
                    </IonCardContent>
                </IonCard>    
            </IonContent>
        </IonPage>
    ); 
}

export default objetivos; 

