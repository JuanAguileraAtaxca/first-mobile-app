import React from 'react';
import {IonPage, IonContent, IonHeader, IonTitle, IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonGrid, IonRow, IonCol} from '@ionic/react';
import {logoIonitron, extensionPuzzle, peopleCircle, flag} from 'ionicons/icons'; 

const alcances: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark" class="ion-padding-start">
                    <IonIcon slot="start" size="large" icon={logoIonitron}/>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard color="dark">
                    <IonCardHeader>
                        <IonToolbar class="ion-text-center">
                            <IonCardTitle> <h1> Alcance </h1> </IonCardTitle>
                            <IonIcon size="large" icon={flag}/>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent >
                        <IonItem class="ion-text-justify">
                            <p>
                                El alcance de este proyecto tiene como finalidad la determinación clara, sencilla y concreta de los
                                objetivos que se intentarán alcanzar, a lo largo del desarrollo del proyecto en cuestión, igualmente la forma
                                de aprendizaje es un objetivo a tomar para llegar a esas personas que no logran comprender el tema. 
                            </p>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    ); 
}

export default alcances; 
