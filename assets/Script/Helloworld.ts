const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello aaaa';

    @property(cc.Sprite)
    logo: cc.Sprite = null;

    spin: cc.Node;
    constructor() {
      super();
    }

    start() {     
        this.LoadImage();
    }

    onLoad() {
      // this.LoadImage();
      // this.onLoadSpine();
    }

    hideImage() {
      this.logo.node.active = false;
    }

    LoadImage() {

      var self = this;
      cc.resources.load("btnImage/bgSelectBall", cc.SpriteFrame, function (err, spriteFrame) {
        self.logo.spriteFrame = spriteFrame;
      });


      // var self = this;
      // cc.resources.load("btnImage/bgSelectBall", cc.SpriteFrame, function (err, spriteFrame) {
      //   self.logo.spriteFrame = spriteFrame;
      // });

      // cc.loader.loadRes('btnImage/bgSelectBall', cc.SpriteFrame, (err, spriteFrame) => {
      //   if (!err) {
      //     this.logo.spriteFrame = new cc.SpriteFrame(spriteFrame);
      //   } else {
      //     // Log the specific error message for debugging
      //     cc.warn("Failed to load sprite frame:", err.message);
      //   }
      // });
    }

    setButtonImage() {
         // Load the texture using the asset manager

         const position = new cc.Vec2(0, 0); // Replace this with the desired position

         // Example usage:
         const buttonNode = new cc.Node('Button');
         const button = buttonNode.addComponent(cc.Button);
   
         this.node.addChild(buttonNode);
   
         const imagePath = 'btnImage/bgSelectBall.png'; // Replace this with the actual image path
         // Create a sprite frame using the image path
         cc.resources.load(imagePath, cc.SpriteFrame, function (err, spriteFrame) {
           button.normalSprite = spriteFrame;
           buttonNode.setPosition(position);
         });
    }

    TimeCallFuncDefine() {
        setTimeout(() => {
          this.onChangeText();
        }, 500)
    }

    onLoadSpine() {
        // Assuming your spine skeleton data is located at 'resources/loadSpine/alien-ess'
        cc.resources.load('loadSpine/alien-ess', sp.SkeletonData, (err, skeletonData) => {
        if (err) {
          console.error("Failed to load skeleton data:", err);
          return;
        }
      
        // Create the skeleton animation node using the loaded skeleton data
        this.spin = new cc.Node();
        const skeleton = this.spin.addComponent(sp.Skeleton);
        skeleton.skeletonData = skeletonData;
      
        // Set the position of the skeleton animation node
        this.spin.setPosition(0, 0);
      
        // Add the skeleton animation node to the current node
        this.node.addChild(this.spin);
      
        // Call the play method if you want to start the animation immediately
        skeleton.setAnimation(0, 'run', true);
      });
    }

    onChangeText() {
      this.label.string = "button letter changed";
    }   
}
