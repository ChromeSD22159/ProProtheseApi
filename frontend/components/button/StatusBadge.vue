<template>
    <div>
        <div v-if="state !== null && size == 'small'" :class="[ 'status-small', state.aggregate_state ]">
            <NuxtLink to="https://status.frederikkohler.de" target="_blank">
                <div class="status-icon" :title="`All servers are ${transformStatusForOverlay(state.aggregate_state)}`">
                    <div class="status-icon-inner">
                        <span>{{ transformStatusForOverlay(state.aggregate_state).charAt(0).toUpperCase() }}</span>
                    </div>
                    <div class="status-icon-wave"></div>
                    <div class="status-icon-wave-light"></div>
                </div>
            </NuxtLink>
        </div>

        <div v-if="state !== null && size == 'large'" :class="[ 'status-large', state.aggregate_state ]">
            <NuxtLink to="https://status.frederikkohler.de" target="_blank">
                <div class="status-icon" :title="`Some services are ${ transformStatusForOverlay(state.aggregate_state) }`"> 
                    <div class="status-icon-inner"></div>
                    <div class="status-icon-wave"></div>
                    <div class="status-icon-wave-light"></div>
                </div>
                <p>Status: {{ transformStatusWord(state.aggregate_state) }}</p> 
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';

const props = defineProps({
    size: { type: String, default: "small"}
})

const { data: state } = await useFetch('/api/betteruptime', {
    transform: (data) => data.data.attributes
})

const transformStatusWord = (word) => {
  const lowerCaseWord = word.toLowerCase();
  switch (lowerCaseWord) {
    case 'operational':
      return 'Running';
    case 'downtime':
      return 'Down';
    case 'degraded':
      return 'Degraded';
    default:
      return word;
  }
}

const transformStatusForOverlay = (word) => {
  const lowerCaseWord = word.toLowerCase();

  switch (lowerCaseWord) {
    case 'operational':
      return 'up';
    case 'downtime':
      return 'down';
    case 'degraded':
      return 'degraded';
    default:
      return word;
  }
}
</script>

<style lang="scss" scoped>
.status-small {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    .status-icon {
        width: 2rem;
        height: 1.5rem;
        border-radius: 1.5rem;
        margin: 0 0.5rem 0 0;
        position: relative;
        &-wave,
        &-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
        }
        &-wave {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background-color: var(--status-color);
            opacity: 0;
            animation: wave 1500ms ease-in-out infinite;
            z-index: 0;
        }
         &-wave-light {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background-color: var(--status-color);
            opacity: 0;
            animation: wave-light 1500ms ease-in-out infinite;
            animation-delay: 300ms;
            z-index: 0;
        }
        &-inner {
            width: 1rem;
            height: 1rem;
            border-radius: inherit;
            background-color: var(--status-color);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            span {
                color: white;
                font-size: 0.6rem;
                z-index: 15;
            }
        }
    }
    &.operational {
        --status-color: green;
    }
    &.downtime {
        --status-color: orange;
    }
    &.degraded {
        --status-color: red;
    }
    p {
        margin: 0;
        color: var(--status-color);
    }
}

.status-large {
    padding: 0.5rem 1rem;
    background-color: rgba(255,255,255, 0.05);
    border-radius: 0.5rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    &-icon {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1.5rem;
        margin: 0 0.5rem 0 0;
        position: relative;
        &-wave,
        &-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
        }
        &-wave {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background-color: var(--status-color);
            opacity: 0;
            animation: wave 1500ms ease-in-out infinite;
        }
        &-inner {
            width: 0.4rem;
            height: 0.4rem;
            border-radius: inherit;
            background-color: var(--status-color);
        }
    }
    &.operational {
        --status-color: green;
    }
    &.downtime {
        --status-color: orange;
    }
    &.degraded {
        --status-color: red;
    }
    p {
        margin: 0;
        color: var(--status-color);
    }


}

@keyframes wave {
    0% {
        scale: 0;
        opacity: 1;
    }

    90% {
        scale: 1.2;
        opacity: 0;
    }
}

@keyframes wave-light {
    0% {
        scale: 0;
        opacity: 0.8;
    }

    90% {
        scale: 1.5;
        opacity: 0;
    }
}
</style>