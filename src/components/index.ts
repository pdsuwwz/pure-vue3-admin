// Vue Component Install

import { App } from 'vue'
import IconFont from '@/components/IconFont/index.vue'
import Tooltip from '@/components/Tooltip.vue'
import LayoutArea from '@/components/Layout/LayoutArea.vue'
import LayoutSection from '@/components/Layout/LayoutSection.vue'


const componentList = [
  IconFont,
  Tooltip,
  LayoutArea,
  LayoutSection
]

const Components = {
  install(app: App<any>) {
    componentList.forEach((Comp) => {
      app.component(Comp.name!, Comp)
    })
  }
}

export default Components
