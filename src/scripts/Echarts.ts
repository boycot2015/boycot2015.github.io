// 引入 ECharts 核心模块
import * as echarts from "echarts/core";

// 引入常用图表类型
import { LineChart } from "echarts/charts";

// 引入组件
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    LegendComponent,
    TransformComponent,
} from "echarts/components";

// 引入特性和渲染器
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 注册需要的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    LegendComponent
]);

// 导出 ECharts 实例
export default function (el: HTMLElement, option: any) {
    if (!el) return null;
    const chart = echarts.init(el);
     chart.setOption(option);
     return chart;
}