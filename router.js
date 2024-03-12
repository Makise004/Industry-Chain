import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import ShowScreen from './ShowScreen.vue'
import ShowKg from './ShowKg.vue'
import KnowledgeGraph from './KnowledgeGraph.vue'
import ShowCharts1 from '@/components/ShowCharts1.vue'
import ShowCharts2 from '@/components/ShowCharts2.vue'
import ShowCharts3 from '@/components/ShowCharts3.vue'
import ShowCharts4 from '@/components/ShowCharts4.vue'
import ShowCharts5 from '@/components/ShowCharts5.vue'
import ShowCharts6 from '@/components/ShowCharts6.vue'
import ShowCharts7 from '@/components/ShowCharts7.vue'
import ShowCharts8 from '@/components/ShowCharts8.vue'
import ShowCharts9 from '@/components/ShowCharts9.vue'
import ShowCharts10 from '@/components/ShowCharts10.vue'
import ShowCharts11 from '@/components/ShowCharts11.vue'
import ShowCharts12 from '@/components/ShowCharts12.vue'
import ShowCharts13 from '@/components/ShowCharts13.vue'
import ShowCharts14 from '@/components/ShowCharts14.vue'
import ShowCharts15 from '@/components/ShowCharts15.vue'
import ShowCharts16 from '@/components/ShowCharts16.vue'
import ShowCharts17 from '@/components/ShowCharts17.vue'
import ShowCharts18 from '@/components/ShowCharts18.vue'
import ShowCharts19 from '@/components/ShowCharts19.vue'
import ShowCharts20 from '@/components/ShowCharts20.vue'
import ShowCharts21 from '@/components/ShowCharts21.vue'
import ShowCharts22 from '@/components/ShowCharts22.vue'
import ShowCharts23 from '@/components/ShowCharts23.vue'
import ShowCharts24 from '@/components/ShowCharts24.vue'
import ShowCharts25 from '@/components/ShowCharts25.vue'
import ShowCharts26 from '@/components/ShowCharts26.vue'
import ShowCharts27 from '@/components/ShowCharts27.vue'
import ShowCharts28 from '@/components/ShowCharts28.vue'
import ShowCharts29 from '@/components/ShowCharts29.vue'
import ShowCharts30 from '@/components/ShowCharts30.vue'
import ShowCharts31 from '@/components/ShowCharts31.vue'
import TheBoard from './TheBoard.vue'
import TheSum from './TheSum.vue'
import QueryFirm from './QueryFirm.vue'
import Manage from './ManageGraph.vue'
import Manage2 from './ManageGraph2.vue'
import SingleFirm from './ShowFirm.vue'
import QueryRelation from './QueryRelation.vue'
import login from './LoginPlat.vue'
import firmChain from './FirmChain.vue'

const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/screen',
            component: ShowScreen
        },
        {
            path: '/kg',
            component: ShowKg
        },
        {
            path: '/kg-search',
            component: KnowledgeGraph
        },
        {
            path: '/charts1',
            component: ShowCharts1
        },
        {
            path: '/charts2',
            component: ShowCharts2
        },
        {
            path: '/charts3',
            component: ShowCharts3
        },
        {
            path: '/charts4',
            component: ShowCharts4
        },
        {
            path: '/charts5',
            component: ShowCharts5
        },
        {
            path: '/charts6',
            component: ShowCharts6
        },
        {
            path: '/charts7',
            component: ShowCharts7
        },
        {
            path: '/charts8',
            component: ShowCharts8
        },
        {
            path: '/charts9',
            component: ShowCharts9
        },
        {
            path: '/charts10',
            component: ShowCharts10
        },
        {
            path: '/charts11',
            component: ShowCharts11
        },
        {
            path: '/charts12',
            component: ShowCharts12
        },
        {
            path: '/charts13',
            component: ShowCharts13
        },
        {
            path: '/charts14',
            component: ShowCharts14
        },
        {
            path: '/charts15',
            component: ShowCharts15
        },
        {
            path: '/charts16',
            component: ShowCharts16
        },
        {
            path: '/charts17',
            component: ShowCharts17
        },
        {
            path: '/charts18',
            component: ShowCharts18
        },
        {
            path: '/charts19',
            component: ShowCharts19
        },
        {
            path: '/charts20',
            component: ShowCharts20
        },
        {
            path: '/charts21',
            component: ShowCharts21
        },
        {
            path: '/charts22',
            component: ShowCharts22
        },
        {
            path: '/charts23',
            component: ShowCharts23
        },
        {
            path: '/charts24',
            component: ShowCharts24
        },
        {
            path: '/charts25',
            component: ShowCharts25
        },
        {
            path: '/charts26',
            component: ShowCharts26
        },
        {
            path: '/charts27',
            component: ShowCharts27
        },
        {
            path: '/charts28',
            component: ShowCharts28
        },
        {
            path: '/charts29',
            component: ShowCharts29
        },
        {
            path: '/charts30',
            component: ShowCharts30
        },
        {
            path: '/charts31',
            component: ShowCharts31
        },
        {
            path: '/board',
            component: TheBoard
        },
        {
            path: '/sum',
            component: TheSum
        },
        {
            path: '/qfirm',
            component: QueryFirm
        },
        {
            path: '/nodeManage',
            component: Manage
        },
        {
            path: '/edgeManage',
            component: Manage2
        },
        {
            path: '/',
            redirect: '/login'  //默认显示界面
        },
        {
            path: '/SingleFirm/:id',
            component: SingleFirm
        },
        {
            path: '/qRelation',
            component: QueryRelation
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/firmChain',
            component: firmChain
        }
    ]
})
export default router;