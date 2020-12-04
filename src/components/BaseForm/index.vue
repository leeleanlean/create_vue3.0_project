<template>
  <!-- form -->
  <el-form
    ref="refForm"
    :model="forms"
    :rules="config.form.rules"
    :inline="config.form.inline"
    :label-position="config.form.labelPosition"
    :label-width="config.form.labelWidth ?? 'auto'"
    :label-suffix="config.form.labelSuffix"
    :hide-required-asterisk="config.form.hideRequiredAsterisk"
    :show-message="config.form.showMessage"
    :inline-message="config.form.inlineMessage"
    :status-icon="config.form.statusIcon"
    :validate-on-rule-change="config.form.validateOnRuleChange"
    :size="config.form.size"
    :disabled="config.form.disabled">

    <!-- row -->
    <el-row
      :gutter="config.row.gutter"
      :type="config.row.type"
      :justify="config.row.justify"
      :align="config.row.align"
      :tag="config.row.tag">
      <el-col
        v-for="(col, index) in config.cols"
        :key="index"
        :span="col.span"
        :offset="col.offset"
        :push="col.push"
        :pull="col.pull">

        <!-- type === text -->
        <el-form-item v-if="col.type === 'text'" :label="col.label">
          {{ forms[col.prop] }}
        </el-form-item>

        <!-- type === link -->
        <el-form-item v-if="col.type === 'link'" :label="col.label">
          <el-link
            :type="col.config.type"
            :underline="col.config.underline"
            :disabled="col.config.disabled"
            @click.prevent="col.config.click">
            {{ forms[col.prop] }}
          </el-link>
        </el-form-item>

        <!-- type === input -->
        <el-form-item v-if="col.type === 'input'" :label="col.label" :prop="col.prop">
          <el-input
            :type="col.config.type"
            v-model="forms[col.prop]"
            :minlength="col.config.minlength"
            :maxlength="col.config.maxlength"
            :show-word-limit="col.config.showWordLimit"
            :placeholder="col.config.placeholder ?? `请输入${col.label}`"
            :clearable="col.config.clearable ?? true"
            :show-password="col.config.showPassword"
            :disabled="col.config.disabled"
            :size="col.config.size"
            :prefix-icon="col.config.prefixIcon"
            :suffix-icon="col.config.suffixIcon"
            :rows="col.config.rows"
            :autosize="col.config.autosize"
            :auto-complete="col.config.autoComplete"
            :name="col.config.name"
            :readonly="col.config.readonly"
            :max="col.config.max"
            :min="col.config.min"
            :step="col.config.step"
            :resize="col.config.resize"
            :autofocus="col.config.autofocus"
            :form="col.config.form"
            :label="col.config.label"
            :tabindex="col.config.tabindex"
            :validate-event="col.config.validateEvent"
            @blur="col.config.blur"
            @focus="col.config.focus"
            @change="col.config.change"
            @input="col.config.input"
            @clear="col.config.clear">
            <template v-if="col.config.prefix" #prefix>{{ col.config.prefix }}</template>
            <template v-if="col.config.suffix" #suffix>{{ col.config.suffix }}</template>
            <template v-if="col.config.prepend" #prepend>{{ col.config.prepend }}</template>
            <template v-if="col.config.append" #append>{{ col.config.append }}</template>
          </el-input>
        </el-form-item>

        <!-- type === radio -->
        <el-form-item v-if="col.type === 'radio'" :label="col.label" :prop="col.prop">
          <el-radio-group
            v-model="forms[col.prop]"
            :size="col.config.size"
            :disabled="col.config.disabled"
            :text-color="col.config.textColor"
            :fill="col.config.fill"
            @change="col.config.change">
            <el-radio
              v-for="(option, index) in col.config.options"
              :key="index"
              :label="option.value ?? option.label"
              :disabled="option.disabled"
              :border="option.border"
              :size="option.size"
              :name="option.name">
              {{ option.label }}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- type === checkbox -->
        <el-form-item v-if="col.type === 'checkbox'" :label="col.label" :prop="col.prop">
          <el-checkbox-group
            v-model="forms[col.prop]"
            :size="col.config.size"
            :disabled="col.config.disabled"
            :min="col.config.min"
            :max="col.config.max"
            :text-color="col.config.textColor"
            :fill="col.config.fill"
            @change="col.config.change">
            <el-checkbox
              v-for="(option, index) in col.config.options"
              :key="index"
              :label="option.value ?? option.label"
              :true-label="option.trueLabel"
              :false-label="option.falseLabel"
              :disabled="option.disabled"
              :border="option.border"
              :size="option.size"
              :name="option.name"
              :checked="option.checked"
              :indeterminate="option.indeterminate">
              {{ option.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <!-- type === InputNumber -->
        <el-form-item v-if="col.type === 'InputNumber'" :label="col.label" :prop="col.prop">
          <el-input-number
            v-model="forms[col.prop]"
            :min="col.config.min"
            :max="col.config.max"
            :step="col.config.step"
            :stepStrictly="col.config.stepStrictly"
            :precision="col.config.precision"
            :size="col.config.size"
            :disabled="col.config.disabled"
            :controls="col.config.controls"
            :controls-position="col.config.controlsPosition"
            :name="col.config.name"
            :label="col.config.label"
            :placeholder="col.config.placeholder ?? `请输入${col.label}`"
            @change="col.config.change"
            @blur="col.config.blur"
            @focus="col.config.focus"
          />
        </el-form-item>

        <!-- type === select -->
        <el-form-item v-if="col.type === 'select'" :label="col.label" :prop="col.prop">
          <el-select
            v-model="forms[col.prop]"
            :multiple="col.config.multiple"
            :disabled="col.config.disabled"
            :value-key="col.config.valueKey"
            :size="col.config.size"
            :clearable="col.config.clearable ?? true"
            :collapseTags="col.config.collapseTags"
            :multiple-limit="col.config.multipleLimit"
            :name="col.config.name"
            :autocomplete="col.config.autocomplete"
            :placeholder="col.config.placeholder ?? `请选择${col.label}`"
            :filterable="col.config.filterable"
            :allow-create="col.config.allowCreate"
            :filter-method="col.config.filterMethod"
            :remote="col.config.remote"
            :remote-method="col.config.remoteMethod"
            :loading="col.config.loading"
            :loadingText="col.config.loadingText"
            :no-matchText="col.config.noMatchText"
            :no-dataText="col.config.noDataText"
            :popper-class="col.config.popperClass"
            :reserve-keyword="col.config.reserveKeyword"
            :default-first-option="col.config.defaultFirstOption"
            :popper-append-to-body="col.config.popperAppendToBody"
            :automatic-dropdown="col.config.automaticDropdown"
            :clear-icon="col.config.clearIcon"
            @change="col.config.change"
            @visible-change="col.config.visibleChange"
            @removeTag="col.config.removeTag"
            @clear="col.config.clear"
            @blur="col.config.blur"
            @focus="col.config.focus">
            <template v-if="col.config.groups">
              <el-option-group
                v-for="group in col.config.groups"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="(option, index) in group.options"
                  :key="index"
                  :label="option.value ?? option.label"
                  :value="option.value"
                  :disabled="option.disabled">
                </el-option>
              </el-option-group>
            </template>
            <template v-if="col.config.options">
              <el-option
                v-for="(option, index) in col.config.options"
                :key="index"
                :label="option.value ?? option.label"
                :value="option.value"
                :disabled="option.disabled">
              </el-option>
            </template>
          </el-select>
        </el-form-item>

        <!-- type === cascader -->
        <el-form-item v-if="col.type === 'cascader'" :label="col.label" :prop="col.prop">
          <el-cascader
            v-model="forms[col.prop]"
            :options="col.config.options"
            :props="col.config.props"
            :size="col.config.size"
            :placeholder="col.config.placeholder ?? `请选择${col.label}`"
            :disabled="col.config.disabled"
            :clearable="col.config.clearable ?? true"
            :show-all-levels="col.config.showAllLevels"
            :collapseTags="col.config.collapseTags"
            :separator="col.config.separator"
            :filterable="col.config.filterable"
            :filter-method="col.config.filterMethod"
            :debounce="col.config.debounce"
            :before-filter="col.config.beforeFilter"
            :popper-class="col.config.popperClass"
            @change="col.config.change"
            @expand-change="col.config.expandChange"
            @blur="col.config.blur"
            @focus="col.config.focus"
            @visible-change="col.config.visibleChange"
            @removeTag="col.config.removeTag"
          />
        </el-form-item>

        <!-- type === switch -->
        <el-form-item v-if="col.type === 'switch'" :label="col.label" :prop="col.prop">
          <el-switch
            v-model="forms[col.prop]"
            :disabled="col.config.disabled"
            :loading="col.config.loading"
            :width="col.config.width"
            :active-icon-class="col.config.activeIconClass"
            :inactive-icon-class="col.config.inactiveIconClass"
            :activeText="col.config.activeText"
            :inactiveText="col.config.inactiveText"
            :active-value="col.config.activeValue"
            :inactive-value="col.config.inactiveValue"
            :active-color="col.config.activeColor"
            :inactive-color="col.config.inactiveColor"
            :name="col.config.name"
            :validate-event="col.config.validateEvent"
            @change="col.config.change"
          />
        </el-form-item>

        <!-- type === TimePicker -->
        <el-form-item v-if="col.type === 'TimePicker'" :label="col.label" :prop="col.prop">
          <el-time-picker
            v-model="forms[col.prop]"
            :readonly="col.config.readonly"
            :disabled="col.config.disabled"
            :editable="col.config.editable"
            :clearable="col.config.clearable"
            :size="col.config.size"
            :placeholder="col.config.placeholder ?? `请选择${col.label}`"
            :start-placeholder="col.config.startPlaceholder"
            :end-placeholder="col.config.endPlaceholder"
            :isRange="col.config.isRange"
            :arrow-control="col.config.arrowControl"
            :align="col.config.align"
            :popper-class="col.config.popperClass"
            :rangeSeparator="col.config.rangeSeparator"
            :string="col.config.string"
            :default-value="col.config.defaultValue"
            :name="col.config.name"
            :prefix-icon="col.config.prefixIcon"
            :clear-icon="col.config.clearIcon"
            @change="col.config.change"
            @blur="col.config.blur"
            @focus="col.config.focus"
          />
        </el-form-item>

        <!-- type === TimeSelect -->
        <el-form-item v-if="col.type === 'TimeSelect'" :label="col.label" :prop="col.prop">
          <el-time-select
            v-model="forms[col.prop]"
            :disabled="col.config.disabled"
            :editable="col.config.editable"
            :clearable="col.config.clearable"
            :size="col.config.size"
            :placeholder="col.config.placeholder ?? `请选择${col.label}`"
            :picker-options="col.config.pickerOptions"
            :name="col.config.name"
            :prefix-icon="col.config.prefixIcon"
            :clear-icon="col.config.clearIcon"
            @change="col.config.change"
            @blur="col.config.blur"
            @focus="col.config.focus"
          />
        </el-form-item>

        <!-- type === DatePicker -->
        <el-form-item v-if="col.type === 'DatePicker'" :label="col.label" :prop="col.prop">
          <el-date-picker
            v-model="forms[col.prop]"
            :readonly="col.config.readonly"
            :disabled="col.config.disabled"
            :editable="col.config.editable"
            :clearable="col.config.clearable"
            :size="col.config.size"
            :placeholder="col.config.placeholder ?? `请选择${col.label}`"
            :start-placeholder="col.config.startPlaceholder"
            :end-placeholder="col.config.endPlaceholder"
            :time-arrow-control="col.config.timeArrowControl"
            :type="col.config.type ?? 'date'"
            :format="col.config.format ?? 'YYYY-MM-DD'"
            :align="col.config.align"
            :popper-class="col.config.popperClass"
            :range-separator="col.config.rangeSeparator"
            :default-value="col.config.defaultValue"
            :default-time="col.config.defaultTime"
            :name="col.config.name"
            :unlink-panels="col.config.unlinkPanels"
            :prefix-icon="col.config.prefixIcon"
            :clear-icon="col.config.clearIcon"
            :validate-event="col.config.validateEvent"
            @change="col.config.change"
            @blur="col.config.blur"
            @focus="col.config.focus"
          />
        </el-form-item>

        <!-- type === slider -->
        <el-form-item v-if="col.type === 'slider'" :label="col.label" :prop="col.prop">
          <el-slider
            v-model="forms[col.prop]"
            :min="col.config.min"
            :max="col.config.max"
            :disabled="col.config.disabled"
            :step="col.config.step"
            :show-input="col.config.showInput"
            :show-input-controls="col.config.showInputControls"
            :inputSize="col.config.inputSize"
            :showStops="col.config.showStops"
            :showTooltip="col.config.showTooltip"
            :formatTooltip="col.config.formatTooltip"
            :range="col.config.range"
            :vertical="col.config.vertical"
            :height="col.config.height"
            :label="col.config.label"
            :debounce="col.config.debounce"
            :tooltip-class="col.config.tooltipClass"
            :marks="col.config.marks"
            @change="col.config.change"
            @input="col.config.input"
          />
        </el-form-item>

        <!-- type === rate -->
        <el-form-item v-if="col.type === 'rate'" :label="col.label" :prop="col.prop">
          <el-rate
            v-model="forms[col.prop]"
            :max="col.config.max"
            :disabled="col.config.disabled"
            :allow-half="col.config.allowHalf"
            :lowThreshold="col.config.lowThreshold"
            :highThreshold="col.config.highThreshold"
            :colors="col.config.colors"
            :void-color="col.config.voidColor"
            :disabled-void-color="col.config.disabledVoidColor"
            :icon-classes="col.config.iconClasses"
            :void-icon-class="col.config.voidIconClass"
            :disabled-void-icon-class="col.config.disabledVoidIconClass"
            :showText="col.config.showText"
            :showScore="col.config.showScore"
            :text-color="col.config.textColor"
            :texts="col.config.texts"
            :scoreTemplate="col.config.scoreTemplate"
            @change="col.config.change"
          />
        </el-form-item>

        <!-- type === color -->
        <el-form-item v-if="col.type === 'color'" :label="col.label" :prop="col.prop">
          <el-color-picker
            v-model="forms[col.prop]"
            :disabled="col.config.disabled"
            :size="col.config.size"
            :show-alpha="col.config.showAlpha"
            :color-format="col.config.colorFormat"
            :popper-class="col.config.popperClass"
            :predefine="col.config.predefine"
            @change="col.config.change"
            @active-change="col.config.activeChange"
          />
        </el-form-item>

        <!-- type === transfer -->
        <el-form-item v-if="col.type === 'transfer'" :label="col.label" :prop="col.prop">
          <el-transfer
            v-model="forms[col.prop]"
            :data="col.config.data"
            :filterable="col.config.filterable"
            :filter-placeholder="col.config.filterPlaceholder"
            :filter-method="col.config.filterMethod"
            :target-order="col.config.targetOrder"
            :titles="col.config.titles"
            :buttonTexts="col.config.buttonTexts"
            :render-content="col.config.renderContent"
            :format="col.config.format"
            :props="col.config.props"
            :left-default-checked="col.config.leftDefaultChecked"
            :right-default-checked="col.config.rightDefaultChecked"
            @change="col.config.change"
            @left-check-change="col.config.leftCheckChange"
            @right-check-change="col.config.rightCheckChange"
          />
        </el-form-item>

        <!-- type === upload -->
        <el-form-item v-if="col.type === 'upload'" :label="col.label" :prop="col.prop">
          <BaseUpload :col="col" />
        </el-form-item>

        <!-- type === slot -->
        <template v-if="col.type === 'slot'">
          <slot :name="col.prop"></slot>
        </template>
      </el-col>
    </el-row>

    <!-- footer -->
    <el-row type="flex" justify="end">
      <el-button @click="resetForm">重置</el-button>
      <el-button type="primary" @click="submitForm">保存</el-button>
    </el-row>
  </el-form>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import BaseUpload from '../BaseUpload/index.vue'

export default {
  props: {
    config: Object
  },
  components: {
    BaseUpload
  },
  setup (props, { emit }) {
    // 表单组件
    const refForm = ref()

    // 设置默认表单字段
    const forms = reactive({ ...props?.config?.form?.data })
    const cols = props?.config?.cols
    cols.forEach(item => {
      const type = item.type
      if (['text', 'link'].includes(type)) {
        !forms[item.prop] && (forms[item.prop] = item?.config?.text)
      } else if (['checkbox', 'cascader', 'transfer'].includes(type)) {
        !forms[item.prop] && (forms[item.prop] = [])
      } else if (['InputNumber', 'slider', 'rate'].includes(type)) {
        !forms[item.prop] && (forms[item.prop] = 0)
      } else if (['switch'].includes(type)) {
        !forms[item.prop] && (forms[item.prop] = false)
      } else if (['color'].includes(type)) {
        !forms[item.prop] && (forms[item.prop] = '#409EFF')
      } else {
        !forms[item.prop] && (forms[item.prop] = '')
      }
    })

    // 清空表单
    const resetForm = () => refForm.value.resetFields()

    // 提交表单
    const submitForm = () => {
      refForm.value.validate((valid: unknown) => {
        if (!valid) {
          ElMessage.error('请正确填写必填表单')
          return false
        }
        emit('submit', forms)
      })
    }

    return {
      refForm,
      forms,
      resetForm,
      submitForm
    }
  }
}
</script>
