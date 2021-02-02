require('!test-loader-two?extensions[]=js&extensions[]=scss&levels[]=src/components!test-loader!pug-html-loader!./sign_in.pug');

import '../../layout/layout.scss';
import './sign_in.scss';