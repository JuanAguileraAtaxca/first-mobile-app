import React from 'react';
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow, IonCol, IonButton, IonLabel, IonCardSubtitle, IonList, IonItem, IonGrid, IonImg} from '@ionic/react';
import {logoIonitron, homeOutline, albumsOutline, helpCircleOutline} from 'ionicons/icons';

const ayuda: React.FC = () =>{
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark" class="ion-padding-start">
                    <IonIcon slot="start" size="large" icon={logoIonitron}/>
                    <IonTitle>
                        <h1> <strong>Ayuda</strong> </h1>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            <h2> Menú </h2>
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCard className="ion-margin-start ion-margin-end">
                        <IonToolbar>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonCard class="ion-text-center">
                                            <IonButton color="tertiary">
                                                <IonIcon icon={homeOutline} />
                                            </IonButton>
                                            <IonLabel> Home </IonLabel>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol>
                                        <IonCard class="ion-text-center">
                                            <IonButton color="tertiary">
                                                <IonIcon icon={albumsOutline} />
                                            </IonButton>
                                            <IonLabel> Contenidos </IonLabel>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol>
                                        <IonCard class="ion-text-center">
                                            <IonButton color="tertiary">
                                                <IonIcon icon={helpCircleOutline} />
                                            </IonButton>
                                            <IonLabel> Ayuda </IonLabel>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonToolbar>
                    </IonCard>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            Se ha desarrollado un menú fácil y cómodo de usar, este se encuentra en la parte 
                            inferior de la pantalla para que el usuario pueda navegar entre tres opciones diferentes, 
                            las cuales son la página principal respectivamente, un apartado de contenidos donde se encuentra el concepto 
                            de estadística, métodos de aplicación y su utilidad, por último, existe un apartado dedicado a la ayuda, que cumple 
                            el objetivo de explicar como usar la aplicación de forma general. 
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle>
                                <h2> Inicio de la aplicación </h2>
                            </IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonToolbar>
                        <IonGrid>
                            <IonRow class="ion-justify-content-center">
                                <IonCol size="10">
                                    <IonCard>
                                        <IonHeader>
                                            <IonToolbar class="ion-padding-start" color="tertiary">
                                                <IonIcon slot="start" icon={logoIonitron}/>
                                                <h5> Home </h5>
                                            </IonToolbar>
                                        </IonHeader>
                                        <IonCardContent>
                                            <IonCard>
                                                <IonImg src="/assets/images/1.jpg"/>
                                                <IonItem>
                                                    <IonLabel> Bienvenidos </IonLabel>
                                                </IonItem>
                                                <IonItem>
                                                    <p> leer más </p>
                                                </IonItem>
                                            </IonCard>
                                            <IonCard>
                                                <IonImg src="/assets/images/2.jpg"/>
                                                <IonItem>
                                                    <IonLabel> Objetivos </IonLabel>
                                                </IonItem>
                                                <IonItem> <p> leer más </p></IonItem>
                                            </IonCard>
                                            <IonCard>
                                                <IonImg src="/assets/images/3.jpg"/>
                                                <IonItem>
                                                    <IonLabel> Alcances </IonLabel>
                                                </IonItem>
                                                <IonItem> <p> leer más </p> </IonItem>
                                            </IonCard>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonToolbar>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            Home muestra tres apartados: la primera es la bienvenida, donde describe la función principal que funge la aplicación acerca
                            de la estadística; la segunda sección abarca los objetivos deseados a lograr por este medio; el tercero, cuenta con la visión
                            a la que se quiere llegar, que implica el crecimiento del programa a obtener. 
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle>
                                <h2> Contenido de la app </h2>
                            </IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonToolbar>
                        <IonGrid>
                            <IonRow class="ion-justify-content-center">
                                <IonCol size="9">
                                    <IonCard>
                                        <IonHeader>
                                            <IonToolbar class="ion-padding-start" color="tertiary">
                                                <IonIcon slot="start" icon={logoIonitron}/>
                                                <h5> Contenidos </h5>
                                            </IonToolbar>
                                        </IonHeader>
                                        <IonCardContent>
                                            <IonList>
                                                <IonItem> <p> ¿Qué es la estadística? </p></IonItem>
                                            </IonList>
                                            <IonList>
                                                <IonItem> <p> Campos de aplicación </p></IonItem>
                                            </IonList>
                                            <IonList>
                                                <IonItem> <p> ¿Por qué es util la estadística? </p></IonItem>
                                            </IonList>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonToolbar>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            El tema principal que aborda esta aplicación es la estadistica, para poder dar una información completa 
                            sobre dicho tema se han planteado preguntas sencillas de las cuales se puede conocer y obtener mucha información. 
                            Dentro de las interrogantes se busca conocer el concepto de la estadística pues para la iniciación de un tema es fundamental
                            abordar los conceptos que abarca, asimismo indagar los métodos de aplicación, puesto que gracias a los mismos se puede generar
                            una idea sobre como se utiliza en las diferentes áreas de trabajo. Finalmente, se destacará la utilidad e importancia de la 
                            estadística, dado que actualmente se ha convertido en la herramienta principal para la elaboración procesos de investigación 
                            y concentración de información tanto en ámbitos formales como informales 
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle>
                                <h2> Apartado de ayuda </h2>
                            </IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonToolbar>
                        <IonGrid>
                            <IonRow class="ion-justify-content-center">
                                <IonCol size="6">
                                    <IonCard class="ion-text-center">
                                        <IonToolbar>
                                            <IonButton color="tertiary">
                                                <IonIcon size="large" icon={helpCircleOutline}/>
                                            </IonButton>
                                        </IonToolbar>
                                        <IonLabel> Ayuda </IonLabel>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonToolbar>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            En el apartado de ayuda, el usuario podrá encontrar un apoyo para utilizar la aplicación (el presente manual), del mismo modo,
                            un breve resumen de los contenidos de la segunda sección que ofrece la app, incluyendo un enlace directo a cada uno de los 
                            contenidos dentro de la tabla. 
                        </p>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    ); 
}

export default ayuda; 