import React from 'react';
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonImg, IonCardContent, IonRow, IonGrid, IonCol} from '@ionic/react';
import {logoIonitron} from 'ionicons/icons';

const tendencia: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark" class="ion-padding-start">
                    <IonIcon size="large" icon={logoIonitron}/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonImg src="/assets/images/for.jpg"/>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle>
                                <h2> Formulas </h2>
                            </IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            La siguiente sección tiene como proposito brindar el conocimiento de las formulas más 
                            comunes en el mundo de la estadística, cabe mencionar que las mismas solo son conceptos 
                            que ayudan a ubicar parte teorica de los temas, ya que al a dentrarnos a ese ambito se 
                            encuentran implicitos el analisis de la población (poblacional y muestral) y la forma de 
                            tipos de datos a manejar (agrupados y no agrupados).
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonImg src="/assets/images/media.webp"/>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle> <h2> Media </h2></IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent class="ion-text-justify">
                        <p>
                        La media es la media aritmética de un conjunto de números, se utiliza para distribuciones 
                        normales de números, con una cantidad baja de valores atípicos, esta se calcula sumando todos 
                        los valores y dividiendo la suma entre el número total de valores.
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonImg src="/assets/images/mediana.png"/>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle> <h2> Mediana </h2></IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            La mediana es un valor numérico que separa la mitad superior de un conjunto de la mitad inferior, 
                            se utiliza generalmente para devolver la tendencia central en el caso de distribuciones numéricas 
                            sesgadas, este se puede calcular poniendo los números en orden ascendente y luego localizando el 
                            número del centro de esa distribución.
                        </p>
                        <p>
                            Supongamos que usted tiene una columna que contiene N valores. Para calcular la mediana, 
                            primero ordene los valores de los datos del más pequeño al más grande. Si N es impar, 
                            la mediana de la muestra es el valor del medio. Si N es par, la mediana es el promedio de los dos valores del medio.
                        </p>
                        <p>
                            Por ejemplo, cuando N = 5 y usted tiene los datos x1, x2, x3, x4 y x5, la mediana = x3.
                        </p>
                        <p>
                            Cuando N = 6 y usted ordenó los datos x1, x2, x3, x4, x5 y x6:
                        </p>
                        <IonGrid>
                            <IonRow class="ion-justify-content-center">
                                <IonCol size="6">
                                    <IonCard>
                                        <IonCardContent>
                                            <IonImg src="/assets/images/ejemplo.png" />
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <p>
                            donde x3 y x4 son la tercera y la cuarta observación.
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonImg src="/assets/images/moda.webp"/>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle> <h2> Moda </h2></IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            La moda estadística de un conjunto de datos, se define como el número que está representado 
                            más veces dentro de esos datos, es decir, aquel número que presenta una mayor frecuencia absoluta dentro de la muestra.
                        </p>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonImg src="/assets/images/desviacion.png"/>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle>
                                <h2> Desviación estándar </h2>
                            </IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            La desviación estándar mide la dispersión de una distribución de datos. Entre más dispersa 
                            está una distribución de datos, más grande es su desviación estándar.
                        </p>
                        <p>
                            Es interesante que la desviación estándar no puede ser negativa. Una desviación estándar 
                            cercana a 000 indica que los datos tienden a estar más cerca a la media (se muestra por la 
                            línea punteada). Entre más lejos estén los datos de la media, más grande es la desviación estándar.
                        </p>
                        <p>
                            Si la columna contiene x 1, x 2,..., x N, con media  , entonces la desviación estándar de la muestra es:
                        </p>
                        <IonGrid>
                            <IonRow class="ion-justify-content-center">
                                <IonCol size="6">
                                    <IonCard>
                                        <IonCardContent>
                                            <IonImg src="/assets/images/ejemplo_desviacion.png" />
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonImg src="/assets/images/tendencia.webp"/>
                    <IonCardHeader>
                        <IonToolbar>
                            <IonCardTitle>
                                <h2> Varianza </h2>
                            </IonCardTitle>
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent class="ion-text-justify">
                        <p>
                            La Varianza es una medida de dispersión que se utiliza para representar la variabilidad 
                            de un conjunto de datos respecto de la media aritmética de los mismo. Así, se calcula como 
                            la suma de los residuos elevados al cuadrado y divididos entre el total de observaciones. 
                            No obstante, se trata de una medida que también puede calcularse como la desviación típica al cuadrado.
                        </p>
                        <p>
                            Es ampliamente utilizada en los sectores de la economía y las finanzas, interpretándose como el riesgo 
                            de que el rendimiento de algún procedimiento en concreto sea distinto del rendimiento esperado de dicho 
                            procedimiento. La varianza, junto con la desviación estándar ambas medidas muy relacionadas entre sí son 
                            las medidas de dispersión de datos por excelencia, sobre todo en el mundo de las finanzas.
                        </p>
                        <p>
                            Fórmula:
                        </p>
                        <IonGrid>
                            <IonRow class="ion-justify-content-center">
                                <IonCol size="8">
                                    <IonCard>
                                        <IonCardContent>
                                            <IonImg src="/assets/images/ejemplo_varianza.png" />
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <p>
                            Notación:
                        </p>
                        <IonGrid>
                            <IonRow class="ion-justify-content-center">
                                <IonCol size="10">
                                    <IonCard>
                                        <IonCardContent>
                                            <IonImg src="/assets/images/tabla.png" />
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default tendencia; 