import React from 'react';
import {IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonIcon} from '@ionic/react';
import { logoIonitron } from 'ionicons/icons';

const estadistica: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark" class="ion-padding-start">
                    <IonIcon slot="start" size="large" icon={logoIonitron}/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonToolbar>
                                        <IonCardTitle> <h2> ¿Qué es la estadistica? </h2></IonCardTitle>
                                    </IonToolbar>
                                </IonCardHeader>
                                <IonImg src="/assets/images/1-3.jpg" />
                                <IonCardContent class="ion-text-justify">
                                        <p>
                                            La estadística es una disciplina científica que se ocupa de la obtención, orden y análisis de un
                                            conjunto de datos con el fin de obtener explicaciones y predicciones sobre fenómenos observados. Por lo que, la estadística consiste en métodos, procedimientos y fórmulas que permiten recolectar información
                                            para luego analizarla y extraer de ella conclusiones relevantes. Se puede decir que es la Ciencia de
                                            los Datos y que su principal objetivo es mejorar la comprensión de los hechos a partir de la
                                            información disponible.
                                        </p>            
                                </IonCardContent>
                            </IonCard>
                            <IonCard>
                                <IonImg src="/assets/images/1-7.webp" />
                                <IonCardHeader>
                                    <IonToolbar>
                                        <IonCardTitle> <h2> Importancia </h2> </IonCardTitle>
                                    </IonToolbar>
                                </IonCardHeader>
                                
                                <IonCardContent class="ion-text-justify">
                                    <p>
                                        La Estadística proporciona una serie de principios, procedimientos, técnicas y métodos para cuatro tareas fundamentales en la investigación social y los estudios técnicos:
                                    </p>
                                    <ul>
                                        <li>Obtener datos pertinentes de manera rápida y a costos bajos.</li>
                                        <li>Los métodos para su organización y procesamiento, a fin de obtener de ellos la información requerida.</li>
                                        <li>Los principios y métodos para que las conclusiones emanadas o acciones a seguir sean producto de procesos de inducción válidos, que se obtengan de interpretaciones adecuadas de los resultados.</li>
                                        <li>Proporciona los principios y lineamientos para comunicar apropiadamente los resultados, conclusiones y recomendaciones.</li>
                                    </ul>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default estadistica; 