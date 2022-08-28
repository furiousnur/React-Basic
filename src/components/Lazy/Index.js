import React, {Component, Suspense} from 'react'; 
const Other = React.lazy(()=> import('./Other'));

class Index extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Other />
                </Suspense>
            </div>
        );
    }
}

export default Index;