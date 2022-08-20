import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterLink, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import {albumsOutline, homeOutline, helpCircleOutline} from 'ionicons/icons'; 
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import home from './pages/home';
import contenidos from './pages/contenidos';
import ayuda from './pages/ayuda';
import estadistica from './pages/estadistica';
import aplicacion from './pages/aplicacion';
import utilidad from './pages/utilidad';
import objetivos from './pages/objetivos'; 
import alcances from './pages/alcances';
import tendencia from './pages/tendencia';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={home}/>
          <Route path="/contenidos" component={contenidos}/>
          <Route path="/ayuda" component={ayuda}/>
          <Route path="/estadistica" component={estadistica}/>
          <Route path="/aplicacion" component={aplicacion}/>
          <Route path="/utilidad" component={utilidad}/>
          <Route path="/objetivos" component={objetivos}/>
          <Route path="/alcances" component={alcances}/>
          <Route path="/tendencia" component={tendencia}/>
          <Redirect exact from="/" to="/home"/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="light">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline}/>
              <IonLabel> Home </IonLabel>
            </IonTabButton>
            <IonTabButton tab="contenidos" href="/contenidos">
              <IonIcon icon={albumsOutline}/>
              <IonLabel> Contenidos </IonLabel>
            </IonTabButton>
            <IonTabButton tab="ayuda" href="/ayuda">
              <IonIcon icon={helpCircleOutline}/>
              <IonLabel> Ayuda </IonLabel>
            </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
