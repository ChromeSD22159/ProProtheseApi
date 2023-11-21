<template>
   <!-- :style="{ left: buttonPosition.left + 'px', top: buttonPosition.top + 'px' }" -->
  <div ref="board" class="board">
    <div
      @mousedown="startDragging"
      @mousemove="dragging"
      @mouseup="stopDragging"
      @mouseleave="stopDragging"
      @touchstart="startDragging"
      @touchmove="dragging"
      @touchend="stopDragging"
      @touchcancel="stopDragging"
      class="flex justify-center items-center draggable-container"
      :class="isDragging ? 'move': 'reset'"
    >
      <div
        :style="{ left: modelValue + 'px', transition: isDragging? 'all 50ms ease-in-out' : 'all 0.5s ease-in-out'}"
        class="round-button fk-bg-highlight"
        ref="button"
      >
        {{ isButtonRight ? "Gesendet" : "Senden" }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
    props: {
        modelValue: Number,
    },
    data() {
        return {
            isDragging: false,
            startDraggingPosition: { x: 0, y: 0 },
            isButtonRight: false
        };
    },
    methods: {
        startDragging(event) {
            event.preventDefault();
            this.isDragging = true;
            const clientX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
            this.startDraggingPosition = clientX
        },
        dragging(event) {
            const boardElement = this.$refs.board.getBoundingClientRect();
            let MaxButtonPosition = boardElement.right - boardElement.left - 75
            event.preventDefault();

            if (this.isDragging) {
                const clientX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
                const buttonRect = this.$refs.button.getBoundingClientRect();
                
                if (this.modelValue !== MaxButtonPosition) {
                    this.$emit('update:modelValue', clientX - this.startDraggingPosition);
                } 

                if (buttonRect.left <= boardElement.left || buttonRect.right >= boardElement.right) {
                   // Outside
                } 
            }
        },
        stopDragging(event) {
            event.preventDefault();
            this.isDragging = false;
            const buttonRect = this.$refs.button.getBoundingClientRect();
            const boardElement = this.$refs.board.getBoundingClientRect();

            let MaxButtonPosition = boardElement.right - boardElement.left - 75

            if (buttonRect.left <= boardElement.left || buttonRect.right >= boardElement.right) {
                this.$emit('update:modelValue', 0);
            } 

            if (buttonRect.right <= boardElement.right - 15) {
                this.$emit('update:modelValue', 0);
            } else {
                this.$emit('update:modelValue', MaxButtonPosition);
                this.isButtonRight = true;
                this.handleButtonClick()
            }

            if (buttonRect.right >= boardElement.right) {
                this.$emit('update:modelValue', MaxButtonPosition);
            }
        },
        handleButtonClick() {
            this.$emit('sendMailHandler');

            setTimeout(() => {
                this.$emit('update:modelValue', 0);
                this.isButtonRight = false 
            }, "1500");
        },
    }
};
</script>



<style scoped>
    .board {
        background: rgba(255, 255, 255, 0.02);
        border-radius: 15px;
        padding: 0;
        border-radius: 50px;
    }

    .draggable-container {
        position: relative;
        top: 0;
        left: 0;
        height: 50px;
    /* overflow: hidden; */
    }

    .round-button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
        transition: transform 0.1s;
        position: absolute;
        color: black;
        border: none;
        transition: all 50ms ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0.03em;
    }

    

</style>
