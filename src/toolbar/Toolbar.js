import React, { PureComponent } from 'react';
import styles from '../styles';
import defaultTooltips from '../tooltips';
import IntervalPicker from './IntervalPicker';
import TypePicker from './TypePicker';
import IndicatorsPicker from './IndicatorsPicker';
import SharePicker from './SharePicker';
// import CrosshairSwitcher from './CrosshairSwitcher';
// import SettingsPicker from './SettingsPicker';

type Props = {
    allowOHLC: boolean,
    assetName: string,
    interval: string,
    type: string,
    compact: boolean,
    showTooltips: boolean,
    crosshair?: boolean,
    chart: HighstockChart,
    hideIntervalPicker: boolean,
    pickerShown: string,
    theme: string,
    getChart: () => any,
    getXAxis: () => any,
    getYAxis: () => any,
    onShowPicker: (picker: any) => void,
    onIntervalChange: (interval: string) => void,
    onIndicatorChange: (indicators: string[]) => void,
    onTypeChange: (chartType: string) => void,
};

export default class Toolbar extends PureComponent {

    props: Props;

    static defaultProps = {
        type: 'area',
        compact: false,
        hideIntervalPicker: false,
    };

    render() {
        const { allowOHLC, assetName, compact, type, getChart, pickerShown, interval, showTooltips,
            onShowPicker, onIntervalChange, onTypeChange, onIndicatorChange, hideIntervalPicker } = this.props;
        const tooltips = showTooltips ? defaultTooltips : {};

        return (
            <div style={styles.toolbar} className="binary-chart-toolbar">
                <TypePicker
                    allowOHLC={allowOHLC}
                    value={type}
                    tooltip={tooltips.type}
                    expanded={pickerShown === 'type'}
                    onExpand={() => onShowPicker('type')}
                    onChange={onTypeChange}
                />
                {(allowOHLC && !compact && !hideIntervalPicker) &&
                    <IntervalPicker
                        value={interval}
                        tooltip={tooltips.interval}
                        expanded={pickerShown === 'interval'}
                        onExpand={() => onShowPicker('interval')}
                        onChange={onIntervalChange}
                    />
                }
                {/* <CrosshairSwitcher
                    tooltip={tooltips.crosshair}
                    getXAxis={getXAxis}
                    getYAxis={getYAxis}
                /> */}
                {!compact &&
                    <IndicatorsPicker
                        tooltip={tooltips.indicators}
                        expanded={pickerShown === 'indicators'}
                        onExpand={() => onShowPicker('indicators')}
                        onChange={onIndicatorChange}
                    />
                }
                <SharePicker
                    assetName={assetName}
                    tooltip={tooltips.share}
                    expanded={pickerShown === 'share'}
                    onExpand={() => onShowPicker('share')}
                    getChart={getChart}
                />
                {/* {!compact &&
                    <SettingsPicker
                    tooltip={tooltips.settings}
                    />} */}
            </div>
        );
    }
}
