import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MichaelNav from './MichaelNav';
import MichaelAbout from './MichaelAbout';
import MichaelProjects from './MichaelProjects';



const Michael = () => {

    return (
        <div>
            <MichaelNav />
            <Switch>
                <Route path='/personal-info/michael/projects'>
                    <MichaelProjects />
                </Route>
                <Route path='/personal-info/michael'>
                    <MichaelAbout />
                </Route>
            </Switch>
        </div>
    )
}

export default Michael