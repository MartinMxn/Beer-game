<template>
  <div class="bg">
    <TopBar :realTimeBuy="realTimeBuy" :realTimeSell="realTimeSell" :curTip="curTip"/>
    <!-- four cards -->
    <div class="row mt-2 mb-2">
      <Cards
        cardColor="card bg-success"
        cardTitle="Round(12 total)"
        :cardNumber="round"
        cardIcon="md-time"
      />
      <Cards
        cardColor="card bg-primary"
        cardTitle="Balance($)"
        :cardNumber="balance"
        cardIcon="md-checkmark-circle-outline"
      />
      <Cards
        cardColor="card bg-danger"
        cardTitle="Inventory(20$/round)"
        :cardNumber="inventory"
        cardIcon="md-home"
      />
      <Cards
        cardColor="card bg-secondary"
        cardTitle="Backlog(40$/round)"
        :cardNumber="backlog"
        cardIcon="md-clipboard"
      />
    </div>

    <!-- two boards -->
    <el-row type="flex" justify="space-around">
      <!-- Action board -->
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <div class="span6">
            <div class="text-center actionboard">Action Board</div>
            <div class="row-fluid">
              <div class="span12">
                <div class="text-center">{{role}} {{roleRandomNum}}</div>
              </div>
            </div>

            <div class="row rolePic">
              <div class="span3 leftRole">
                <b>{{leftRoleName}}</b>
                <br>
                <!-- incoming ship -->
                <div>Shipping delay</div>
                <div>{{incomingShip}}</div>
                <div class="span12">
                  <img src="../assets/Rarrow.gif">
                </div>
                <br>
                <!-- last order -->
                <div>Last outgoing</div>
                <div class="span12">
                  <div>Order : {{lastOrder}}</div>
                  <img src="../assets/Larrow.gif">
                </div>
              </div>
              <div class="span6">
                <div class="picBox">
                  <img :src="picUrl">
                  <div>
                    <Button
                      type="text"
                      ghost
                      @click="changeIcon()"
                      v-show="showChangeButton"
                    >Look bad? Click to roll</Button>
                  </div>
                </div>
              </div>
              <div class="span3 rightRole">
                <b>{{rightRoleName}}</b>
                <br>
                <!-- last ship -->
                <div>Shipping delay</div>
                <div>{{lastShip}}</div>
                <div class="span12">
                  <img src="../assets/Rarrow.gif">
                </div>
                <br>

                <div>Incoming</div>
                <!-- incoming order -->
                <div class="span12">
                  <div>Order : {{incomingOrder}}</div>
                  <img src="../assets/Larrow.gif">
                </div>
              </div>
            </div>
            <div class="row-fluid">
              <br>
              <div class="span12 text-center">
                Outgoing Order :
                <Input-number
                  v-model.number="outGoingOrder"
                  size="large"
                  placeholder="Number"
                  style="width: 100px"
                />
              </div>
            </div>
            <div class="row-fluid" v-show="buttonDis">
              <div class="span12 text-center actionboard">
                <button type="button" class="btn btn-success submitB" @click="nextRound()">Submit</button>
              </div>
            </div>
          </div>
          <div class="span6"></div>
        </div>
      </el-col>

      <!-- Chart board -->
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <el-button
            type="warning"
            plain
            class="infoB"
            @click="infoButtom()"
            v-show="infoButtonDis"
          >Info consultation</el-button>
          <Chart id="test" :option="option" class="chart1"/>
        </div>
      </el-col>
    </el-row>

    <!-- dialog -->
    <Modal v-model="dialog" title="Round Summary">
      <div class="dialogDetail1">Inventory carrying cost : -{{invencost}}</div>
      <div class="dialogDetail1">Backlog penalty : -{{backPan}}</div>
      <div class="dialogDetail1">Purchase cost : -{{purchaseCost}}</div>
      <div class="dialogDetail2">Sales revenue : +{{salesR}}</div>
      <div class="dialogDetail2">Deliver on-time bonus : +{{deliverB}}</div>
    </Modal>
    <!-- info dialog -->
    <Modal
      v-model="inforDialog"
      title="This is information consultation!"
      @on-ok="infoDialogOk"
      @on-cancel="infoDialogCancel"
    >
      <div>
        You are {{this.role}}, you need to pay {{this.priceOfInfo}}$ to visualize last 6 rounds demand
      </div>
    </Modal>
  </div>
</template>

<script>
import http from "../http-common.js";
import Chart from "../components/Chart.vue";
import TopBar from "../components/gamepage/TopBar.vue";
import Cards from "../components/gamepage/Card.vue";
export default {
  name: "game",
  data() {
    return {
      role: this.$route.query.role,
      demands: {},
      round: 1,
      balance: 0,
      inventory: 0,
      backlog: 0,
      totalscore: 0,
      news: [],
      beerPrice: 10,
      roleRandomNum: 0,
      buttonDis: true,
      infoButtonDis: true,
      defaultName: "",
      outGoingOrder: null,
      rolePicNum: 0,
      showChangeButton: true,
      leftRoleName: "",
      rightRoleName: "",
      incomingOrder: 0,
      lastOrder: 0,
      incomingShip: 0,
      lastShip: 0,
      realTimeBuy: 32,
      realTimeSell: 43,
      tips: {},
      dialog: false,
      inforDialog: false,
      dialogTitle: "",
      curTip: "",
      invencost: 0,
      backPan: 0,
      purchaseCost: 0,
      salesR: 0,
      deliverB: 0,
      priceOfInfo: 0,
      AIretailerOrder: [],
      AIsupplierOrder: [],
      AImanufacturerOrder: [],
      picUrl: require("../assets/role1.gif"),
      option: {
        title: { text: "Customer Demand Reference", left: "center" },
        tooltip: {},
        xAxis: {
          data: []
        },
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 25
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        yAxis: {},
        series: [
          {
            name: "demand",
            type: "line",
            data: [],
            smooth: true
          },
          {
            name: "Retailer order",
            type: "line",
            data: [],
            smooth: true
          },
          {
            name: "Supplier order",
            type: "line",
            data: [],
            smooth: true
          },
          {
            name: "Manufacturer order",
            type: "line",
            data: [],
            smooth: true
          }
        ]
      }
    };
  },
  components: {
    Chart,
    TopBar,
    Cards
  },
  methods: {
    getDataAndInitChart() {
      //get demands
      http
        .get("/game")
        .then(response => {
          this.demands = response.data;
          //axios always after mounted
          this.initDemandChartAndOrder();
        })
        .catch(e => {
          console.log(e);
        });
      //get tips and init curTip
      http
        .get("/game/tip")
        .then(response => {
          this.tips = response.data;
          var numOfTip = Math.floor(Math.random() * this.tips.length - 1 + 1);
          this.curTip = this.tips[numOfTip].tip;
        })
        .catch(e => {
          console.log(e);
        });
    },
    initBalance() {
      //init balance and name
      if (this.role === "Manufacturer") {
        this.balance = 4000;
        this.inventory = 20 + Math.floor(10 - Math.random() * 20);
        this.leftRoleName = "Raw Material";
        this.rightRoleName = "Supplier";
        this.priceOfInfo = 1000;
      } else if (this.role === "Supplier") {
        this.balance = 3500;
        this.inventory = 20 + Math.floor(10 - Math.random() * 20);
        this.leftRoleName = "Manufacturer";
        this.rightRoleName = "Retailer";
        this.priceOfInfo = 800;
      } else if (this.role === "Retailer") {
        this.balance = 3000;
        this.inventory = 20 + Math.floor(10 - Math.random() * 20);
        this.leftRoleName = "Supplier";
        this.rightRoleName = "Customer";
        this.priceOfInfo = 600;
      }

      // init random role pic
      var rolePicNumCur = Math.floor(Math.random() * 13 + 1);
      this.rolePicNum = rolePicNumCur;
      this.picUrl = require("../assets/role" + rolePicNumCur + ".gif");

      //init random role number
      this.roleRandomNum = Math.floor(Math.random() * 300);
      // this.defaultName = this.role + this.roleRandomNum;

      //init price
      this.realTimeBuy += Math.floor(5 - Math.random() * 10);
      this.realTimeSell += Math.floor(5 - Math.random() * 10);
    },

    initDemandChartAndOrder() {
      //init demand chart
      for (let i = 0; i < this.demands.length; i++) {
        // setTimeout(() =>{
        if (i < this.demands.length / 2) {
          this.option.series[0].data.push(this.demands[i].quality);
        }
        this.option.xAxis.data.push(i + 1);
        // }, 30 * i)
      }
      console.log(this.role);
      //init first round order
      if (this.role === "Retailer") {
        this.incomingOrder =
          this.demands[this.round - 1].quality +
          Math.floor(3 - Math.random() * 6);
      } else if ((this.role = "Supplier")) {
        this.incomingOrder =
          this.demands[this.round - 1].quality +
          Math.floor(5 - Math.random() * 10);
      } else if ((this.role = "Manufacturer")) {
        this.incomingOrder =
          this.demands[this.round - 1].quality +
          Math.floor(7 - Math.random() * 14);
      }
    },
    // pushData() {
    //     this.option.xAxis.data.push(xData[0]);
    //     this.option.series[0].data.push(sData[0]);
    // },
    changeIcon() {
      let original = this.rolePicNum;
      while (original === this.rolePicNum) {
        this.rolePicNum = Math.floor(Math.random() * 13 + 1);
      }
      this.picUrl = require("../assets/role" + this.rolePicNum + ".gif");
      // this.showChangeButton = false;
    },
    nextRound() {
      if (this.outGoingOrder != null) {
        //calculate balance
        this.calculateBalance();

        //update chart
        this.updateChart();

        this.inventory += this.incomingShip;
        this.lastOrder = this.outGoingOrder;
        // cant give enough product
        if (this.inventory - this.backlog - this.incomingOrder < 0) {
          this.lastShip = Math.abs(this.inventory - this.backlog);
          this.backlog = Math.abs(
            this.inventory - this.backlog - this.incomingOrder
          );
          this.inventory = 0;
        } else {
          this.inventory = this.inventory - this.backlog - this.incomingOrder;
          this.lastShip = this.incomingOrder;
          this.backlog = 0;
        }
        this.incomingShip = this.lastOrder;
        this.round++;
        // this.round+=11;

        if (this.role === "Retailer") {
          this.incomingOrder =
            this.demands[this.round - 1].quality +
            Math.floor(3 - Math.random() * 6);
        } else if ((this.role = "Supplier")) {
          this.incomingOrder =
            this.demands[this.round - 1].quality +
            Math.floor(5 - Math.random() * 10);
        } else if ((this.role = "Manufacturer")) {
          this.incomingOrder =
            this.demands[this.round - 1].quality +
            Math.floor(7 - Math.random() * 14);
        }

        this.outGoingOrder = null;
        if (this.round >= 5) {
          this.showChangeButton = false;
        }

        //change tip
        var numOfTip = Math.floor(Math.random() * this.tips.length - 1 + 1);
        this.curTip = this.tips[numOfTip].tip;

        //open dialog
        this.dialog = true;

        //judge whether end
        if (this.balance < 0) {
          this.$Message.info("Sorry, your business crashed.");
          this.buttonDis = false;
          setTimeout(() => {
            this.$router.push("/");
          }, 5000);
        }
        //game end
        if (this.round === 12) {
          this.buttonDis = false;
          this.totalscore = this.balance;
          setTimeout(() => {
            this.$router.push({
              name: "rank",
              params: {
                totalscore: this.totalscore
              }
            });
          }, 3000);
        }
      } else {
        this.$Message.info("Please check the number!");
      }
    },
    calculateBalance() {
      this.invencost = this.inventory * 20;
      this.balance -= this.invencost;
      this.purchaseCost = this.outGoingOrder * this.realTimeBuy;
      this.balance -= this.purchaseCost;
      this.salesR = this.lastShip * this.realTimeSell;
      this.balance += this.salesR;
      if (this.backlog > 0) {
        this.backPan = this.backlog * 40 + 50;
        this.balance -= this.backPan;
      } else {
        if (this.lastShip > 0) {
          this.deliverB = 80;
          this.balance += 80;
        }
      }
    },
    updateChart() {
      if ((this.role = "Retailer")) {
        this.option.series[1].data.push(this.outGoingOrder);
        this.option.series[2].data.push(
          this.outGoingOrder + Math.floor(Math.random() * 2)
        );
        this.option.series[3].data.push(
          this.outGoingOrder + Math.floor(Math.random() * 4)
        );
      } else if ((this.role = "Supplier")) {
        this.option.series[1].data.push(this.incomingOrder);
        this.option.series[2].data.push(this.outGoingOrder);
        this.option.series[3].data.push(
          this.outGoingOrder + Math.floor(Math.random() * 2)
        );
      } else if ((this.role = "Manufacturer")) {
        this.option.series[1].data.push(
          this.incomingOrder - Math.floor(Math.random() * 2)
        );
        this.option.series[2].data.push(this.incomingOrder);
        this.option.series[3].data.push(this.outGoingOrder);
      }
    },
    infoButtom() {
      this.inforDialog = true;
    },
    infoDialogOk() {
      if (this.balance >= this.priceOfInfo) {
        for (let i = this.demands.length / 2; i < this.demands.length; i++) {
          // setTimeout(() =>{
          // this.option.xAxis.data.push(i + 1);
          this.option.series[0].data.push(this.demands[i].quality);
          // }, 100 * i)
        }
        this.$Message.info("Look at the chart!");
        this.infoButtonDis = false;
        this.balance -= this.priceOfInfo;
      } else {
        this.$Message.info("Sorry, you can't afford");
      }
    },
    infoDialogCancel() {
      this.$Message.info("You clicked cancel");
    }
  },
  mounted() {
    this.getDataAndInitChart();
    this.initBalance();
    console.log("init");
  },
  updated() {}
};
</script>

<style scoped>
.infoB {
  margin-left: 300px;
}
.dialogDetail1 {
  font-size: medium;
  color: #dd7f7f;
}
.dialogDetail2 {
  font-size: medium;
  color: #63b96a;
}

.chart1 {
  margin-left: 80px;
}
.leftRole {
  margin-top: 10px;
  width: 230px;
}
.rightRole {
  margin-top: 10px;
  width: 230px;
}

.actionboard {
  font-size: xx-large;
}
.rolePic {
  margin-left: 10px;
  text-align: center;
  height: 330px;
}

.bg {
  background-color: #eee;
  height: 100%;
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #e5e9f2;
}
</style>

