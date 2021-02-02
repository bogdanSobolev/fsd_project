require('!test-loader-two?extensions[]=js&extensions[]=scss&levels[]=src/components!test-loader!pug-html-loader!./registration.pug');

import '../../layout/layout.scss';
import './registration.scss';