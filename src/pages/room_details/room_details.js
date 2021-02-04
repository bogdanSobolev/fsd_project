require('!test-loader-two?extensions[]=js&extensions[]=scss&levels[]=src/components!test-loader!pug-html-loader!./room_details.pug');

import '../../layout/layout.scss';
import './room_details.scss';