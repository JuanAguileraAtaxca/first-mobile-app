import React from 'react';
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonList, IonItem, IonThumbnail, IonIcon, IonLabel} from '@ionic/react';
import {diceOutline, podiumOutline, libraryOutline, logoIonitron, receiptOutline} from 'ionicons/icons';

const contenidos: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark" class="ion-padding-start">
                    <IonIcon slot="start" size="large" icon={logoIonitron}/>
                    <IonTitle> <h1> <strong>Contenidos </strong></h1></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonItem href="/estadistica">
                                    <IonThumbnail slot="start" class="ion-padding">
                                        <IonIcon size="large" icon={libraryOutline}/>
                                    </IonThumbnail>
                                    <IonLabel> ¿Qué es la estadistica? </IonLabel>
                                </IonItem>
                                <IonItem href="/aplicacion">
                                    <IonThumbnail slot="start" class="ion-padding">
                                        <IonIcon size="large" icon={podiumOutline}/>
                                    </IonThumbnail>
                                    <IonLabel> Campos de aplicación </IonLabel>
                                </IonItem>
                                <IonItem href="/utilidad">
                                    <IonThumbnail slot="start" class="ion-padding">
                                        <IonIcon size="large" icon={diceOutline}/>
                                    </IonThumbnail>
                                    <IonLabel> ¿Por qué es util la estadistica? </IonLabel>
                                </IonItem>
                                <IonItem href="/tendencia">
                                    <IonThumbnail slot="start" class="ion-padding">
                                        <IonIcon size="large" icon={receiptOutline}/>
                                    </IonThumbnail>
                                    <IonLabel> Medidas de tendecia central </IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default contenidos; 