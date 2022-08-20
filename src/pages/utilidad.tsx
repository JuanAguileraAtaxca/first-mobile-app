import React from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonIcon, IonContent, IonCard, IonCardTitle, IonImg, IonCardContent, IonCardSubtitle, IonCardHeader } from '@ionic/react';
import {logoIonitron} from 'ionicons/icons';

const utilidad: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar class="ion-padding-start" color="dark">
                    <IonIcon size="large" slot="start" icon={logoIonitron}/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle> <h2> ¿Por que la estadística es útil? </h2> </IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    
                    <IonImg src="/assets/images/1-6.png"/>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            La Estadística se ocupa de la recolección, agrupación, 
                            presentación, análisis e interpretación de datos. 
                            Es un método científico que pretende sacar conclusiones 
                            a partir de observaciones realizadas. La estadística 
                            educativa, nos permite recolectar información para 
                            analizarla y tomar decisiones en diferentes niveles.
                            Nos posibilita cuantificar la realidad y disponer 
                            de los elementos que nos permitan su análisis.
                            Los resultados que se pueden obtener con la estadistica 
                            ayudan de forma profecional  de manera amplia en 
                            mercadotecnia, contabilidad, control de calidad, 
                            estudios de consumidores, análisis de resultados 
                            en deportes, administración de instituciones, 
                            en la educación, organismos políticos, en la 
                            medicina y en otras muy distintas áreas como un 
                            auxiliar en la toma de decisiones.
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonImg src="/assets/images/1-5.jpg"/>
                    <IonCardContent class="ion-text-justify">
                        <IonCardSubtitle> Otras aplicaciones </IonCardSubtitle>
                        <p>La Estadística proporciona una serie de principios, 
                            procedimientos, técnicas y métodos para cuatro tareas 
                            fundamentales en la investigación social y los estudios 
                            técnicos:
                        </p>
                        <ul>
                            <li>Obtener datos pertinentes de manera rápida y a costos bajos.</li>
                            <li>Los métodos para su organización y procesamiento, a fin de obtener de ellos la información requerida.</li>
                            <li>
                                Los principios y métodos para que las conclusiones emanadas o acciones a seguir sean producto de procesos de inducción válidos, que se obtengan de 
                                interpretaciones adecuadas de los resultados.
                            </li>
                        </ul>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    ); 
}

export default utilidad; 