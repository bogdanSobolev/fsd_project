require('!test-loader-two?extensions[]=js&extensions[]=scss&levels[]=src/components!test-loader!pug-html-loader!./search_room.pug');

import '../../layout/layout.scss';
import './search_room.scss';