import React from 'react';
import {IonPage, IonHeader, IonToolbar, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonCardSubtitle, IonItem, IonThumbnail} from '@ionic/react';
import {logoIonitron, chatbubblesOutline, flaskOutline, fitnessOutline, analyticsOutline} from 'ionicons/icons';

const aplicacion: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark" class="ion-padding-start">
                    <IonIcon size="large" icon={logoIonitron}/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonToolbar>
                                        <IonCardTitle> <h2> Campos de aplicación </h2> </IonCardTitle>
                                    </IonToolbar>
                                </IonCardHeader>
                                <IonCardContent class="ion-text-justify">
                                    <IonImg src="/assets/images/1-4.jpg" />
                                    <IonToolbar class="ion-margin-top">
                                        <p>
                                            Aunque comúnmente se asocie a estudios demográficos, económicos y sociológicos, gran parte de los
                                            logros de
                                            la estadística se derivan del interés de los científicos por desarrollar modelos que expliquen el
                                            comportamiento de las propiedades de la materia y de los caracteres biológicos. La medicina, la
                                            biología, la
                                            física y, en definitiva, casi todos los campos de las ciencias emplean instrumentos estadísticos de
                                            importancia fundamental para el desarrollo de sus modelos de trabajo.
                                        </p>
                                    </IonToolbar>   
                                </IonCardContent>
                            </IonCard>
                            <IonCard>
                                <IonImg src="assets/images/1-2.jpg"/>
                                <IonCardContent>
                                    <IonCardSubtitle>Sus campos de aplicación estan: </IonCardSubtitle>
                                    <IonItem>
                                        <IonToolbar class="ion-text-justify ion-padding">
                                            <IonThumbnail slot="start">
                                                <IonIcon size="large" icon={flaskOutline}/>
                                            </IonThumbnail>
                                            <p>
                                                En las ciencias naturales: Se emplea con profusión en la descripción de modelos
                                                termodinámicos complejos (mecánica estadística), en física cuántica, en mecánica de fluidos o en la
                                                teoría cinética de los gases, entre otros muchos campos.
                                            </p>
                                        </IonToolbar>
                                    </IonItem>
                                    <IonItem>
                                        <IonToolbar class="ion-text-justify ion-padding">
                                            <IonThumbnail slot="start">
                                                <IonIcon size="large" icon={chatbubblesOutline}/>
                                            </IonThumbnail>
                                            <p>
                                                En las ciencias sociales y económicas: Es un pilar básico del desarrollo de la demografía
                                                y la sociología aplicada.
                                            </p>
                                        </IonToolbar>
                                    </IonItem>
                                    <IonItem>
                                        <IonToolbar class="ion-text-justify ion-padding">
                                            <IonThumbnail slot="start">
                                                <IonIcon size="large" icon={analyticsOutline}/>
                                            </IonThumbnail>
                                            <p>
                                                En economía:  Suministra los valores que ayudan a descubrir interrelaciones entre
                                                múltiples parámetros macro y microeconómicos.
                                            </p>
                                        </IonToolbar>
                                    </IonItem>
                                    <IonItem>
                                        <IonToolbar class="ion-text-justify ion-padding">
                                            <IonThumbnail slot="start">
                                                <IonIcon size="large" icon={fitnessOutline}/>
                                            </IonThumbnail>
                                            <p>
                                                En las ciencias médicas: Permite establecer pautas sobre la evolución de las enfermedades
                                                y los enfermos, los índices de mortalidad asociados a procesos morbosos, el grado de eficacia de un
                                                medicamento, etcétera.
                                            </p>
                                        </IonToolbar>
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    ); 
}

export default aplicacion; 